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
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-white">Our Mission</h2>
                <p className="text-white/80 mb-6 text-lg">
                  At Zion Tech Group, we are driven by a singular mission: to create autonomous systems that think, learn, and evolve independently, 
                  revolutionizing how technology serves humanity. We believe in the power of intelligent automation to solve complex challenges 
                  and unlock unprecedented possibilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-cyan-400">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                    <p className="text-white/60">Pushing boundaries and exploring uncharted technological territories</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-purple-400">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Autonomous Excellence</h3>
                    <p className="text-white/60">Building systems that operate independently and continuously improve</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-emerald-400">🌍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                    <p className="text-white/60">Creating solutions that benefit humanity worldwide</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-white">Our Story</h2>
                <div className="space-y-8">
                  <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">The Beginning</h3>
                    <p className="text-white/80 mb-4">
                      Founded in 2020, Zion Tech Group emerged from a vision to create technology that doesn't just assist humans, 
                      but operates autonomously to solve complex problems. Our founders recognized that the future of technology 
                      lay in systems that could think, learn, and adapt independently.
                    </p>
                    <p className="text-white/80">
                      Starting with a small team of AI researchers and engineers, we began developing the foundational 
                      technologies that would become the backbone of our autonomous systems.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">Rapid Growth & Innovation</h3>
                    <p className="text-white/80 mb-4">
                      By 2023, our autonomous systems were already handling complex tasks across multiple domains. 
                      We expanded our research into quantum computing, neuromorphic architectures, and advanced machine learning, 
                      pushing the boundaries of what autonomous technology could achieve.
                    </p>
                    <p className="text-white/80">
                      Our breakthrough came with the development of self-evolving AI systems that could not only 
                      perform tasks but also identify areas for improvement and implement optimizations autonomously.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Today & Beyond</h3>
                    <p className="text-white/80 mb-4">
                      Today, Zion Tech Group operates one of the most advanced autonomous technology ecosystems in the world. 
                      Our systems manage critical infrastructure, generate innovative solutions, and continuously evolve 
                      to meet the challenges of tomorrow.
                    </p>
                    <p className="text-white/80">
                      We're now focused on the next frontier: artificial general intelligence and systems that can 
                      truly understand and reason about the world around them.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-white">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-blue-400">💡</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Continuous Innovation</h3>
                        <p className="text-white/70">We never stop exploring, experimenting, and pushing the boundaries of what's possible.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-green-400">🔒</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Ethical AI</h3>
                        <p className="text-white/70">We develop autonomous systems with strong ethical frameworks and human oversight.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-yellow-400">🤝</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                        <p className="text-white/70">We believe in the power of partnerships and knowledge sharing to accelerate progress.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-purple-400">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Purpose-Driven</h3>
                        <p className="text-white/70">Every innovation we create serves a higher purpose: improving human lives and capabilities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-red-400">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                        <p className="text-white/70">We maintain the highest standards of quality and performance in everything we do.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl text-indigo-400">🌱</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
                        <p className="text-white/70">Our technology solutions prioritize environmental responsibility and long-term sustainability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-white">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl text-white font-bold">JD</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dr. Jordan Davis</h3>
                    <p className="text-cyan-400 mb-3">Chief Executive Officer</p>
                    <p className="text-white/70 text-sm">
                      Former AI researcher at MIT with 15+ years experience in autonomous systems and machine learning.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl text-white font-bold">SM</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Mitchell</h3>
                    <p className="text-purple-400 mb-3">Chief Technology Officer</p>
                    <p className="text-white/70 text-sm">
                      Quantum computing expert with groundbreaking research in hybrid quantum-classical algorithms.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl text-white font-bold">RC</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dr. Robert Chen</h3>
                    <p className="text-emerald-400 mb-3">Chief Research Officer</p>
                    <p className="text-white/70 text-sm">
                      Leading researcher in neuromorphic computing and brain-inspired AI architectures.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-white">Join Our Mission</h2>
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-8 border border-cyan-500/30 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">Ready to Shape the Future?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    We're always looking for brilliant minds who share our passion for autonomous innovation. 
                    Whether you're a researcher, engineer, or visionary thinker, there's a place for you at Zion Tech Group.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                      Get in Touch
                    </Link>
                    <Link href="/careers" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                      View Careers
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