import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cutting-edge innovation." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous AI systems and cutting-edge innovation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology through AI-driven innovation, sustainable development, and human-AI collaboration.
              </p>
            </header>

            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                  <p className="text-lg text-white/80 mb-6">
                    To accelerate human progress by developing autonomous AI systems that solve complex global challenges while maintaining ethical boundaries and human oversight.
                  </p>
                  <p className="text-white/70 mb-6">
                    We believe in the power of human-AI collaboration to create solutions that are not only technologically advanced but also socially responsible and environmentally sustainable.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 px-4 py-2 rounded-lg border border-green-500/30">
                      <span className="text-green-300 font-semibold">Innovation First</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 py-2 rounded-lg border border-blue-500/30">
                      <span className="text-blue-300 font-semibold">Ethical AI</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-4 py-2 rounded-lg border border-purple-500/30">
                      <span className="text-purple-300 font-semibold">Global Impact</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-8 rounded-2xl border border-cyan-500/30">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">Core Values</h3>
                  <ul className="space-y-4 text-white/90">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Autonomy:</strong> Empowering AI systems to operate independently while maintaining human oversight</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Innovation:</strong> Continuously pushing the boundaries of what's possible with technology</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Sustainability:</strong> Developing solutions that benefit both humanity and the planet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Collaboration:</strong> Fostering partnerships between humans and AI for mutual growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">2019</div>
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">Foundation</h3>
                  <p className="text-blue-200/90 text-sm">
                    Zion Tech Group was founded with a vision to revolutionize how humans interact with artificial intelligence
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-3">Breakthrough</h3>
                  <p className="text-purple-200/90 text-sm">
                    Achieved first autonomous AI system capable of self-improvement and independent problem-solving
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">2025</div>
                  <h3 className="text-xl font-semibold text-cyan-200 mb-3">Expansion</h3>
                  <p className="text-cyan-200/90 text-sm">
                    Deployed autonomous systems across 23 countries, serving millions of users worldwide
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl border border-green-500/30 text-center">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">AI/ML</h3>
                  <p className="text-green-200/90 text-sm">
                    Advanced machine learning models, neural networks, and autonomous decision-making systems
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Cloud Native</h3>
                  <p className="text-blue-200/90 text-sm">
                    Kubernetes, microservices architecture, and auto-scaling infrastructure
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Quantum Computing</h3>
                  <p className="text-purple-200/90 text-sm">
                    Quantum algorithms and hybrid classical-quantum systems for complex problem solving
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-xl border border-orange-500/30 text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">Edge Computing</h3>
                  <p className="text-orange-200/90 text-sm">
                    Distributed computing infrastructure for real-time processing and low-latency applications
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Global Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 p-8 rounded-2xl border border-emerald-500/30">
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4">Environmental Solutions</h3>
                  <p className="text-emerald-200 mb-4">
                    Our autonomous systems are helping to solve critical environmental challenges:
                  </p>
                  <ul className="text-emerald-200/90 space-y-2 text-sm">
                    <li>• Climate modeling and prediction</li>
                    <li>• Renewable energy optimization</li>
                    <li>• Sustainable agriculture systems</li>
                    <li>• Wildlife conservation monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-rose-500/20 to-rose-600/20 p-8 rounded-2xl border border-rose-500/30">
                  <h3 className="text-2xl font-bold text-rose-300 mb-4">Healthcare Innovation</h3>
                  <p className="text-rose-200 mb-4">
                    Advancing medical technology through autonomous AI:
                  </p>
                  <ul className="text-rose-200/90 space-y-2 text-sm">
                    <li>• Drug discovery acceleration</li>
                    <li>• Medical imaging analysis</li>
                    <li>• Personalized treatment plans</li>
                    <li>• Pandemic response systems</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Be part of the future where humans and AI work together to solve the world's greatest challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200">
                  Get in Touch
                </Link>
                <Link href="/reports" className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                  View Our Work
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}