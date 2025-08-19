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
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                At Zion Tech Group, we envision a world where technology operates autonomously, 
                continuously improving and adapting to meet the evolving needs of humanity. Our mission 
                is to develop and deploy intelligent systems that work tirelessly to enhance productivity, 
                security, and innovation across all sectors.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We believe in the power of autonomous systems to solve complex problems, optimize 
                operations, and create sustainable technological solutions that benefit society as a whole.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤖</div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">Autonomous Innovation</h3>
                      <p className="text-white/80">We push the boundaries of what's possible through self-improving systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🔒</div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">Security First</h3>
                      <p className="text-white/80">Every system we build prioritizes security and data protection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🌍</div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">Global Impact</h3>
                      <p className="text-white/80">Our solutions are designed to benefit people worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⚡</div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">Continuous Evolution</h3>
                      <p className="text-white/80">We never stop learning and improving our technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Story</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">2023 - The Beginning</h3>
                  <p className="text-white/80">Founded with a vision to revolutionize how technology serves humanity through autonomous systems</p>
                </div>
                <div className="border-l-4 border-fuchsia-400 pl-6">
                  <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">2024 - Rapid Growth</h3>
                  <p className="text-white/80">Expanded our team and launched our first autonomous automation platform</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">2025 - Global Expansion</h3>
                  <p className="text-white/80">Deployed autonomous systems across multiple continents and industries</p>
                </div>
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Future - Infinite Possibilities</h3>
                  <p className="text-white/80">Continuing to push the boundaries of autonomous technology and AI innovation</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Frontend</h3>
                  <p className="text-white/80 text-sm">Next.js, React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-semibold text-green-300 mb-2">Backend</h3>
                  <p className="text-white/80 text-sm">Node.js, PM2, Automated Systems</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl border border-purple-500/30">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">AI & Automation</h3>
                  <p className="text-white/80 text-sm">Machine Learning, Autonomous Agents</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join Our Mission</h2>
              <div className="text-center">
                <p className="text-lg text-white/90 mb-6">
                  Ready to be part of the autonomous technology revolution? 
                  We're always looking for talented individuals who share our vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/careers" 
                    className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    View Careers
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}