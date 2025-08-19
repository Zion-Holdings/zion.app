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
<<<<<<< HEAD
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </section>
=======
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            {/* Mission & Vision */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    To revolutionize digital infrastructure through autonomous innovation, creating self-sustaining systems that continuously improve and adapt to evolving technological needs.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    We believe in the power of intelligent automation to solve complex challenges and drive unprecedented efficiency in technology operations.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6 text-fuchsia-300">Our Vision</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    To be the global leader in autonomous technology solutions, setting new standards for intelligent automation and AI-powered innovation.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    We envision a future where technology systems are self-healing, self-optimizing, and continuously evolving without human intervention.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Story */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Story</h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    Founded with a vision to transform how technology systems operate, Zion Tech Group emerged from the recognition that traditional approaches to system management and automation were reaching their limits. We saw an opportunity to create something revolutionary – systems that could think, learn, and improve themselves.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    Our journey began with a simple yet ambitious goal: to build automation systems that didn't just follow predefined rules, but could understand context, predict problems, and implement solutions autonomously. This led to the development of our first autonomous agents, which quickly demonstrated the potential for truly intelligent automation.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Today, we operate one of the most advanced autonomous technology ecosystems in the world, with over 227 active automation workflows, 2,960+ generated content pages, and a system that continuously evolves and improves itself. Our success is measured not just in the technology we've built, but in the problems we've solved and the efficiency we've unlocked for our clients and partners.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-300">Innovation First</h3>
                  <p className="text-white/80">
                    We constantly push the boundaries of what's possible, exploring new technologies and approaches to solve complex challenges.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300">Reliability & Trust</h3>
                  <p className="text-white/80">
                    We build systems that our clients can depend on, maintaining the highest standards of quality and security.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Collaboration</h3>
                  <p className="text-white/80">
                    We believe in the power of partnership, working closely with clients and partners to achieve shared success.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Continuous Improvement</h3>
                  <p className="text-white/80">
                    Our systems never stop learning and improving, reflecting our commitment to ongoing innovation and excellence.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-300">Security & Ethics</h3>
                  <p className="text-white/80">
                    We prioritize security and ethical considerations in all our developments, ensuring responsible AI and automation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">Global Impact</h3>
                  <p className="text-white/80">
                    We're committed to creating technology that makes a positive difference worldwide, solving real-world problems.
                  </p>
                </div>
              </div>
            </section>

            {/* Team & Leadership */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Our Approach</h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Autonomous Innovation</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      We believe that the future of technology lies in systems that can operate independently, learn from experience, and continuously improve themselves. Our autonomous agents work around the clock, monitoring, optimizing, and enhancing our technology infrastructure.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      This approach allows us to achieve levels of efficiency and reliability that would be impossible with traditional manual processes, while freeing our human team to focus on strategic innovation and creative problem-solving.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-fuchsia-300">AI-Powered Solutions</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Our solutions leverage cutting-edge artificial intelligence and machine learning technologies to deliver intelligent automation that adapts to changing requirements and learns from every interaction.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      By combining AI with autonomous systems, we create technology that doesn't just follow instructions – it understands context, predicts needs, and implements solutions proactively.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Join Our Mission</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Ready to experience the future of autonomous technology? Let's work together to revolutionize your digital infrastructure.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Explore Solutions
                  </a>
                  <button className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Get in Touch
                  </button>
                </div>
              </div>
            </section>
          </div>
>>>>>>> cursor/update-content-and-fix-links-74fc
=======
              </section>

              <footer className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">
                  Zion Tech Group — Pioneering autonomous innovation since 2025
                </p>
              </footer>
            </article>
          </div>
>>>>>>> 0ae946bee62d031392f0f6f25b15cd207de60919
        </main>
      </div>
    </>
  );
}