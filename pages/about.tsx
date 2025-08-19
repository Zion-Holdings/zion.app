import React from 'react';
import Head from 'next/head';

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
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center">
              <nav className="mb-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Autonomous Innovation</h3>
                  <p className="text-white/80">
                    We're building the world's most advanced autonomous technology systems, 
                    capable of self-improvement, innovation, and continuous evolution without 
                    human intervention.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-semibold mb-4 text-fuchsia-400">AI-Powered Solutions</h3>
                  <p className="text-white/80">
                    Our AI systems generate content, optimize performance, maintain security, 
                    and drive innovation across all aspects of technology infrastructure.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">Content Generation</h4>
                  <p className="text-white/70 text-sm">
                    Autonomous systems create high-quality, SEO-optimized content across 
                    multiple platforms and formats.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-semibold mb-3 text-fuchsia-400">Infrastructure Automation</h4>
                  <p className="text-white/70 text-sm">
                    Self-healing, self-optimizing systems that maintain and improve 
                    technology infrastructure automatically.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-semibold mb-3 text-purple-400">AI Research</h4>
                  <p className="text-white/70 text-sm">
                    Cutting-edge research in autonomous systems, machine learning, 
                    and artificial intelligence.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-sm text-white/70">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960</div>
                  <div className="text-sm text-white/70">Generated Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                  <div className="text-sm text-white/70">Core Components</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
              <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-cyan-400">Frontend</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Next.js with React</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Backend & Infrastructure</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Node.js & PM2</li>
                      <li>• GitHub Actions</li>
                      <li>• Netlify Functions</li>
                      <li>• Cloud automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                <p className="text-lg text-white/90 text-center leading-relaxed">
                  We envision a future where technology is truly autonomous, where systems 
                  can think, learn, and innovate independently. Zion Tech Group is at the 
                  forefront of this revolution, building the foundation for the next era 
                  of human-AI collaboration.
                </p>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Future</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of autonomous technology and be part of the revolution 
                that's reshaping how we think about innovation and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Explore Our Platform
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}