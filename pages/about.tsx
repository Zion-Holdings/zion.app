import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and intelligent automation systems." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and intelligent automation systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of autonomous technology and intelligent automation.
            </p>
          </section>

          <section className="mx-auto max-w-6xl space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Zion Tech Group is dedicated to creating autonomous systems that operate 
                  independently, continuously improving and adapting to meet the evolving 
                  needs of our digital world. We believe in the power of intelligent 
                  automation to solve complex problems and drive innovation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Core Values</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Autonomous Innovation</li>
                  <li>• Continuous Learning</li>
                  <li>• Ethical AI Development</li>
                  <li>• Global Impact</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">What We Do</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
                  <p className="text-white/70">Self-running automation that continuously improves and adapts.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
                  <p className="text-white/70">Cutting-edge technology solutions for tomorrow's challenges.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-white/70">Solutions that scale across borders and industries.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Our Approach</h3>
                <p className="text-white/80 leading-relaxed">
                  We combine advanced artificial intelligence with robust automation 
                  frameworks to create systems that not only solve problems but 
                  continuously evolve and improve. Our autonomous agents work 
                  24/7 to ensure optimal performance and innovation.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-300">The Future</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  As we look ahead, Zion Tech Group is committed to pushing the 
                  boundaries of what's possible with autonomous technology. We're 
                  building a future where intelligent systems work seamlessly 
                  with humans to create a more efficient, innovative world.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}