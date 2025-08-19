import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>
            
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                  <p className="text-lg text-white/90 mb-6">
                    At Zion Tech Group, we're dedicated to creating autonomous systems that revolutionize 
                    how businesses operate, innovate, and grow. Our mission is to democratize advanced 
                    technology through intelligent automation.
                  </p>
                  <p className="text-white/80">
                    We believe in a future where technology works autonomously, intelligently, and 
                    seamlessly to enhance human capabilities and drive unprecedented innovation.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Core Values</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <span className="text-cyan-400 text-xl">✦</span>
                      <span>Innovation at the Speed of Thought</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-fuchsia-400 text-xl">✦</span>
                      <span>Autonomous Excellence</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-purple-400 text-xl">✦</span>
                      <span>Continuous Learning & Evolution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400 text-xl">✦</span>
                      <span>Human-Centric Technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Autonomous Systems</h3>
                  <p className="text-white/80">
                    We develop intelligent automation systems that operate independently, 
                    continuously learning and improving without human intervention.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Innovation Hub</h3>
                  <p className="text-white/80">
                    Our platform serves as a central hub for cutting-edge technology research, 
                    development, and deployment across multiple domains.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Research & Development</h3>
                  <p className="text-white/80">
                    We invest heavily in R&D to push the boundaries of what's possible 
                    with autonomous technology and AI systems.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Technology Stack</h2>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-green-400 mb-2">Next.js</h4>
                    <p className="text-sm text-white/70">Modern React Framework</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🌊</span>
                    </div>
                    <h4 className="font-semibold text-blue-400 mb-2">TypeScript</h4>
                    <p className="text-sm text-white/70">Type-Safe JavaScript</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🎨</span>
                    </div>
                    <h4 className="font-semibold text-purple-400 mb-2">Tailwind CSS</h4>
                    <p className="text-sm text-white/70">Utility-First CSS</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h4 className="font-semibold text-orange-400 mb-2">AI/ML</h4>
                    <p className="text-sm text-white/70">Machine Learning</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227+</div>
                  <div className="text-white/80">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960+</div>
                  <div className="text-white/80">Generated Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-white/80">System Uptime</div>
                </div>
              </div>
            </section>
            
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join the Future</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Ready to experience the power of autonomous technology? Explore our platform, 
                discover our capabilities, and see how we're shaping the future of innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  Explore Platform
                </a>
                <a href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
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