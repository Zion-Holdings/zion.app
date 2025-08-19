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
                
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <a href="/services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                    Our Services
                  </a>
                  <a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                    Case Studies
                  </a>
                  <a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                    Our Team
                  </a>
                  <a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
                    Contact Us
                  </a>
                </div>
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
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">AI Development</h3>
                    <p className="text-white/80 mb-4">
                      Cutting-edge artificial intelligence solutions that learn, adapt, and evolve
                      to meet your business needs.
                    </p>
                    <div className="text-sm text-fuchsia-300">
                      <span className="font-semibold">99.9%</span> Uptime
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-lg p-6 border border-green-400/30">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Cloud Infrastructure</h3>
                    <p className="text-white/80 mb-4">
                      Scalable, secure, and intelligent cloud solutions that grow with your business
                      and optimize performance automatically.
                    </p>
                    <div className="text-sm text-green-300">
                      <span className="font-semibold">1.2s</span> Response Time
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Vision</h2>
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <p className="text-xl text-white/80 text-center leading-relaxed">
                    To create a world where technology operates autonomously, continuously improving and innovating 
                    without human intervention. We envision a future where AI systems work seamlessly alongside humans, 
                    enhancing productivity and driving innovation across all industries.
                  </p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-3">Innovation</h3>
                    <p className="text-white/80">
                      We constantly push the boundaries of what's possible, exploring new technologies
                      and approaches to solve complex problems.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-fuchsia-300 mb-3">Excellence</h3>
                    <p className="text-white/80">
                      Every system we build, every solution we deliver, meets the highest standards
                      of quality and performance.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-green-300 mb-3">Autonomy</h3>
                    <p className="text-white/80">
                      We believe in building systems that can operate independently, learning and
                      improving without constant human oversight.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">Collaboration</h3>
                    <p className="text-white/80">
                      We work closely with our clients to understand their needs and deliver
                      solutions that exceed expectations.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                    <div className="text-white/70">Active Automations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                    <div className="text-white/70">Pages Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-white/70">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">1.2s</div>
                    <div className="text-white/70">Response Time</div>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <h2 className="text-3xl font-bold text-cyan-300 mb-6">Ready to Join the Future?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Discover how Zion Tech Group can transform your business with autonomous technology
                  and intelligent automation solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started Today
                  </a>
                  <a 
                    href="/services" 
                    className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  >
                    Explore Our Services
                  </a>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}