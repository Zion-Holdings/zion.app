import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to pioneer autonomous innovation and transform industries through intelligent automation." />
        <meta property="og:title" content="About Us | Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to pioneer autonomous innovation and transform industries through intelligent automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pioneering the future of autonomous innovation and intelligent automation systems.
                </p>
              </header>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      At Zion Tech Group, we believe that the future belongs to autonomous systems that can think, learn, and evolve independently. 
                      Our mission is to accelerate human progress by creating intelligent automation solutions that transform industries and enhance human capabilities.
                    </p>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      We envision a world where technology works seamlessly in the background, anticipating needs, solving complex problems, 
                      and enabling humans to focus on what truly matters: creativity, innovation, and meaningful human connections.
                    </p>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Through cutting-edge AI, quantum computing, and autonomous orchestration, we're building the foundation for 
                      the next industrial revolution—one driven by intelligent, self-managing systems.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                      <div className="text-8xl">🎯</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-8">
                  <div className="border-l-4 border-cyan-400 pl-8">
                    <h3 className="text-2xl font-semibold mb-3 text-cyan-300">The Beginning</h3>
                    <p className="text-white/80 text-lg">
                      Founded in 2023, Zion Tech Group emerged from a vision to create truly autonomous systems that could operate 
                      independently without constant human intervention. Our founders recognized that the future of technology lay 
                      not in automation, but in autonomy.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-fuchsia-400 pl-8">
                    <h3 className="text-2xl font-semibold mb-3 text-fuchsia-300">The Breakthrough</h3>
                    <p className="text-white/80 text-lg">
                      In 2024, we achieved our first major breakthrough: a fully autonomous AI orchestration system that could 
                      manage complex cloud infrastructure without human oversight. This marked the beginning of our journey into 
                      true autonomous innovation.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-400 pl-8">
                    <h3 className="text-2xl font-semibold mb-3 text-indigo-300">The Evolution</h3>
                    <p className="text-white/80 text-lg">
                      Today, we're at the forefront of autonomous technology, with systems that continuously learn, adapt, and 
                      improve. Our autonomous agents work around the clock, driving innovation and delivering results that exceed 
                      human capabilities.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Values
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Innovation First</h3>
                    <p className="text-white/80">We push the boundaries of what's possible, constantly exploring new frontiers in autonomous technology.</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">🤝</div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Human-Centric</h3>
                    <p className="text-white/80">Our autonomous systems are designed to enhance human capabilities, not replace them.</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-300">Trust & Security</h3>
                    <p className="text-white/80">We prioritize security and reliability in everything we build, ensuring our systems can be trusted.</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">🌍</div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Global Impact</h3>
                    <p className="text-white/80">We're committed to creating technology that benefits humanity and advances global progress.</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">📈</div>
                    <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Continuous Learning</h3>
                    <p className="text-white/80">Like our autonomous systems, we continuously learn, adapt, and improve our approaches.</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-300">Speed & Agility</h3>
                    <p className="text-white/80">We move quickly to bring innovative solutions to market, adapting to changing needs.</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Team
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👨‍💻</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Researchers</h3>
                    <p className="text-white/70">Pioneering the next generation of autonomous intelligence</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👩‍🔬</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Systems Engineers</h3>
                    <p className="text-white/70">Building robust, scalable autonomous infrastructure</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👨‍💼</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Business Strategists</h3>
                    <p className="text-white/70">Ensuring our innovations create real business value</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👩‍🎨</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">UX Designers</h3>
                    <p className="text-white/70">Creating intuitive interfaces for autonomous systems</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👨‍🔧</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">DevOps Engineers</h3>
                    <p className="text-white/70">Maintaining seamless autonomous operations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-4xl">👩‍💻</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Data Scientists</h3>
                    <p className="text-white/70">Extracting insights from autonomous system data</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Our Impact
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Industries Transformed</h3>
                    <ul className="text-white/80 space-y-2 text-lg">
                      <li>• Healthcare: AI-powered diagnostics and treatment planning</li>
                      <li>• Finance: Autonomous risk assessment and fraud detection</li>
                      <li>• Manufacturing: Intelligent production optimization</li>
                      <li>• Transportation: Self-managing logistics networks</li>
                      <li>• Energy: Smart grid management and optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Global Reach</h3>
                    <ul className="text-white/80 space-y-2 text-lg">
                      <li>• 50+ enterprise clients worldwide</li>
                      <li>• Operations in 15+ countries</li>
                      <li>• 24/7 autonomous system monitoring</li>
                      <li>• Multi-language support and localization</li>
                      <li>• Compliance with international standards</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl border border-cyan-400/30 p-12">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Join Our Mission
                  </h2>
                  <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                    Ready to be part of the autonomous revolution? Let's build the future together.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                      Get in Touch
                    </Link>
                    <Link href="/services" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}