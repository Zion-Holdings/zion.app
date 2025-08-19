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
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pioneering the future of autonomous technology and intelligent automation systems
                </p>
              </header>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Vision</h3>
                    <p className="text-white/80">
                      To create a world where technology operates autonomously, intelligently, and seamlessly, 
                      empowering businesses and individuals to focus on what truly matters.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Purpose</h3>
                    <p className="text-white/80">
                      We develop cutting-edge autonomous systems that continuously learn, adapt, and improve, 
                      driving innovation across all sectors of technology.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
                    <p className="text-white/70">
                      We build intelligent systems that operate independently, making decisions and taking actions 
                      without human intervention.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">AI Automation</h3>
                    <p className="text-white/70">
                      Our AI-powered automation solutions streamline processes, reduce costs, and increase efficiency 
                      across all business operations.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Cloud Innovation</h3>
                    <p className="text-white/70">
                      We leverage cloud-native technologies to create scalable, resilient, and globally accessible 
                      solutions for modern businesses.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Our Technology</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Core Technologies</h3>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          Advanced Machine Learning & AI
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          Cloud-Native Architecture
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          Autonomous Agent Systems
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          Intelligent Process Automation
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          Blockchain & Web3 Integration
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Innovation Areas</h3>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <span className="text-fuchsia-400 mr-2">•</span>
                          Quantum Computing Research
                        </li>
                        <li className="flex items-start">
                          <span className="text-fuchsia-400 mr-2">•</span>
                          Edge Computing Solutions
                        </li>
                        <li className="flex items-start">
                          <span className="text-fuchsia-400 mr-2">•</span>
                          Autonomous Content Generation
                        </li>
                        <li className="flex items-start">
                          <span className="text-fuchsia-400 mr-2">•</span>
                          Intelligent Security Systems
                        </li>
                        <li className="flex items-start">
                          <span className="text-fuchsia-400 mr-2">•</span>
                          Sustainable Tech Solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                    <div className="text-white/70">Active Automations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960</div>
                    <div className="text-white/70">Pages Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-white/70">System Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-white/70">Autonomous Operation</div>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-full p-2 mr-4 mt-1">
                        <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Cutting-Edge Innovation</h4>
                        <p className="text-white/70">We stay ahead of the curve with the latest technologies and methodologies.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-full p-2 mr-4 mt-1">
                        <svg className="w-5 h-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                        <p className="text-white/70">Our systems deliver measurable improvements in efficiency and performance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-500/20 border border-purple-500/30 rounded-full p-2 mr-4 mt-1">
                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h4>
                        <p className="text-white/70">Our architecture grows with your business needs and requirements.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-full p-2 mr-4 mt-1">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                        <p className="text-white/70">Our autonomous systems provide continuous monitoring and support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 rounded-lg p-8 text-center">
                  <p className="text-xl text-white/80 mb-6">
                    Ready to revolutionize your business with autonomous technology?
                  </p>
                  <div className="space-x-4">
                    <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                      Contact Us
                    </a>
                    <a href="/" className="inline-block border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                      Learn More
                    </a>
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