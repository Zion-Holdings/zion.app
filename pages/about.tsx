import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and autonomous innovation capabilities in cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and autonomous innovation capabilities in cutting-edge technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of autonomous innovation and intelligent technology solutions.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  To revolutionize technology development through autonomous innovation systems, 
                  creating intelligent solutions that operate independently and continuously improve 
                  without human intervention.
                </p>
                
                <h3 className="text-2xl font-semibold text-fuchsia-400">Core Values</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Autonomous Innovation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Continuous Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Ethical AI Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Global Impact
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-fuchsia-400">Our Vision</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  To create a world where technology systems are self-managing, self-improving, 
                  and autonomously innovative, enabling human creativity to focus on higher-order 
                  problem-solving and strategic thinking.
                </p>
                
                <h3 className="text-2xl font-semibold text-cyan-400">Key Capabilities</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Autonomous Cloud Automations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    AI-Powered Content Generation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Self-Healing Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                    Intelligent Process Orchestration
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Our Innovation Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Autonomous Agents</h3>
                <p className="text-white/70">
                  Self-managing AI agents that continuously monitor, optimize, and improve 
                  technology systems without human intervention.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Cloud Automation</h3>
                <p className="text-white/70">
                  Intelligent cloud infrastructure that self-scales, self-heals, and 
                  autonomously manages resources for optimal performance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Content Intelligence</h3>
                <p className="text-white/70">
                  AI-powered content generation and optimization systems that create 
                  engaging, relevant content autonomously.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Join the Future</h2>
            <p className="text-lg text-white/80 mb-8">
              Be part of the autonomous innovation revolution. Discover how Zion Tech Group 
              is shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a 
                href="/automation" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                Explore Automation
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}