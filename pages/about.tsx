import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation." />
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
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-white/80 mb-4">
                  At Zion Tech Group, we are committed to revolutionizing the technology landscape through 
                  autonomous innovation. Our mission is to create intelligent systems that operate independently, 
                  continuously learn, and deliver exceptional value to our clients and partners.
                </p>
                <p className="text-white/80">
                  We believe in the power of automation to transform industries, enhance productivity, 
                  and unlock new possibilities that were once thought impossible.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                <p className="text-white/80 mb-4">
                  We envision a world where technology seamlessly integrates with human potential, 
                  where autonomous systems handle complex tasks with precision and efficiency, 
                  and where innovation happens continuously without human intervention.
                </p>
                <p className="text-white/80">
                  Our goal is to be the leading force in autonomous technology, setting new standards 
                  for what's possible in the digital age.
                </p>
              </section>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Innovation First</h3>
                  <p className="text-white/70">
                    We constantly push boundaries and explore new frontiers in technology.
                  </p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Autonomous Excellence</h3>
                  <p className="text-white/70">
                    We build systems that operate independently and continuously improve.
                  </p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Global Impact</h3>
                  <p className="text-white/70">
                    We create solutions that benefit humanity and transform industries worldwide.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">Artificial Intelligence</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Machine Learning & Deep Learning</li>
                    <li>• Natural Language Processing</li>
                    <li>• Computer Vision</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Cloud Infrastructure</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Microservices Architecture</li>
                    <li>• Container Orchestration</li>
                    <li>• Serverless Computing</li>
                    <li>• Edge Computing</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-2xl font-semibold mb-4 text-green-300">Automation Systems</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Process Automation</li>
                    <li>• Workflow Orchestration</li>
                    <li>• Intelligent Monitoring</li>
                    <li>• Self-Healing Systems</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/30">
                  <h3 className="text-2xl font-semibold mb-4 text-orange-300">Digital Transformation</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Legacy System Modernization</li>
                    <li>• API-First Development</li>
                    <li>• DevOps & CI/CD</li>
                    <li>• Security & Compliance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-white">Foundation (2020)</h3>
                      <p className="text-white/70">
                        Established with a vision to revolutionize technology through autonomous innovation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-white">First Autonomous Systems (2022)</h3>
                      <p className="text-white/70">
                        Deployed our first generation of autonomous content generation and monitoring systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-white">Global Expansion (2024)</h3>
                      <p className="text-white/70">
                        Expanded operations globally and launched advanced AI-powered solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-white">Future Forward (2025+)</h3>
                      <p className="text-white/70">
                        Leading the charge in quantum computing, advanced AI, and autonomous innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Us in Shaping the Future</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                We're always looking for partners, clients, and team members who share our passion 
                for innovation and autonomous technology. Together, we can build a future that's 
                more intelligent, efficient, and sustainable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-200">
                  Get in Touch
                </Link>
                <Link href="/" className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                  Explore Our Work
                </Link>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}