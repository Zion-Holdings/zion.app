import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and autonomous innovation systems." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and autonomous innovation systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pioneering the future of autonomous technology and intelligent automation systems.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Innovation First</h3>
                    <p className="text-white/80">
                      We believe in pushing the boundaries of what's possible through cutting-edge technology
                      and autonomous systems that work tirelessly to improve and evolve.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Autonomous Excellence</h3>
                    <p className="text-white/80">
                      Our systems operate independently, continuously learning and adapting to deliver
                      exceptional results without human intervention.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-lg p-6 border border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Autonomous Automation</h3>
                    <p className="text-white/80 mb-4">
                      We develop and deploy intelligent automation systems that handle complex tasks
                      with precision and efficiency.
                    </p>
                    <div className="text-sm text-cyan-300">
                      <span className="font-semibold">227+</span> Active Workflows
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-fuchsia-400/10 to-purple-400/10 rounded-lg p-6 border border-fuchsia-400/30">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Content Generation</h3>
                    <p className="text-white/80 mb-4">
                      Our AI-powered systems create intelligent, contextually relevant content
                      across multiple domains and industries.
                    </p>
                    <div className="text-sm text-fuchsia-300">
                      <span className="font-semibold">2,960+</span> Pages Generated
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">System Redundancy</h3>
                    <p className="text-white/80 mb-4">
                      We implement comprehensive redundancy systems ensuring 99.99% uptime
                      and continuous operation.
                    </p>
                    <div className="text-sm text-green-300">
                      <span className="font-semibold">99.99%</span> Uptime
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Next.js 14</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>React 18</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold mb-4">Backend & Infrastructure</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Node.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>PM2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>GitHub Actions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Netlify</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/80">Automation Workflows</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                    <div className="text-white/80">Content Pages</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                    <div className="text-white/80">System Uptime</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-white/80">Operation</div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Get Involved</h2>
                <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-lg p-8 border border-cyan-400/30 text-center">
                  <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Join Our Innovation Journey</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Whether you're interested in our autonomous systems, want to explore our content,
                    or have questions about our technology, we'd love to hear from you.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors">
                      Contact Us
                    </Link>
                    <Link href="/automation" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
                      Explore Automation
                    </Link>
                  </div>
                </div>
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  Zion Tech Group — Pioneering autonomous innovation since 2025
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}