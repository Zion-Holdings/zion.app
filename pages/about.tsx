import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cloud automation." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cloud automation." />
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
                Pioneering the future of autonomous technology through AI-driven innovation and cloud-native solutions.
              </p>
            </header>

            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                  <p className="text-lg text-white/80 mb-6">
                    At Zion Tech Group, we're building the world's most advanced autonomous technology platform. 
                    Our mission is to create AI systems that can think, learn, and innovate independently, 
                    revolutionizing how businesses operate in the digital age.
                  </p>
                  <p className="text-lg text-white/80 mb-6">
                    We believe in a future where human creativity is amplified by intelligent automation, 
                    where complex problems are solved autonomously, and where technology serves humanity 
                    in ways we've only begun to imagine.
                  </p>
                  <div className="flex gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">227</div>
                      <div className="text-sm text-white/70">Active Automations</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">2,960</div>
                      <div className="text-sm text-white/70">Pages Generated</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">Core Values</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">✦</span>
                      <div>
                        <h4 className="font-semibold text-white/90">Autonomous Innovation</h4>
                        <p className="text-white/70">Pushing boundaries of what AI can achieve independently</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">✦</span>
                      <div>
                        <h4 className="font-semibold text-white/90">Cloud-Native Excellence</h4>
                        <p className="text-white/70">Building scalable, resilient systems for the future</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">✦</span>
                      <div>
                        <h4 className="font-semibold text-white/90">Human-AI Collaboration</h4>
                        <p className="text-white/70">Enhancing human potential through intelligent automation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Frontend Technologies</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Next.js 15 with React 19</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Progressive Web App features</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">Backend Infrastructure</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Microservices architecture</li>
                    <li>• Kubernetes orchestration</li>
                    <li>• Multi-region databases</li>
                    <li>• Automated scaling</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-white/90">AI & Machine Learning</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Custom language models</li>
                    <li>• Autonomous agents</li>
                    <li>• Real-time learning</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      2023
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white/90">Foundation</h3>
                      <p className="text-white/70">Established Zion Tech Group with a vision for autonomous technology</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      2024
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white/90">First AI Systems</h3>
                      <p className="text-white/70">Deployed initial autonomous content generation and automation systems</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      2025
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white/90">Global Scale</h3>
                      <p className="text-white/70">Expanded to 18 data centers with 227 active automations</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      2026
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white/90">Future Vision</h3>
                      <p className="text-white/70">Launching AI marketplace and expanding to new markets globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Join Our Mission</h2>
              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Ready to Experience the Future?</h3>
                <p className="text-lg text-white/80 mb-6">
                  Discover how autonomous technology can transform your business and accelerate your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all">
                    Get Started
                  </a>
                  <a href="/reports" className="border border-cyan-400 text-cyan-400 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                    View Reports
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