import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | AI-Powered Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered technology solutions, autonomous systems, and cutting-edge innovations." />
        <meta name="keywords" content="Zion Tech Group, AI technology, autonomous systems, machine learning, cybersecurity, quantum computing" />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI-powered technology solutions and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <SmartHeader />
        
        <main id="main-content" className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                  About Zion Tech Group
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  Pioneering the future of autonomous technology and AI-driven innovation
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    To accelerate human progress through autonomous AI systems that continuously learn, adapt, and evolve. We believe in creating technology that works for humanity, not against it.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Our autonomous platforms are designed to handle complex business operations, research tasks, and creative endeavors with minimal human intervention, freeing people to focus on what truly matters.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    A world where AI and humans collaborate seamlessly, where technology anticipates needs and solves problems before they arise, and where innovation happens at the speed of thought.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    We envision a future where autonomous systems handle routine tasks while humans focus on creativity, strategy, and meaningful human connections.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  From humble beginnings to pioneering the future of autonomous technology
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Founded in 2020</h3>
                  <p className="text-white/70">
                    Started as a small team of AI researchers and engineers with a vision to democratize autonomous technology.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Breakthroughs</h3>
                  <p className="text-white/70">
                    Developed revolutionary autonomous systems that can learn, adapt, and operate independently across various domains.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                  <p className="text-white/70">
                    Now serving thousands of clients worldwide with cutting-edge autonomous solutions and AI-powered services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                  <p className="text-white/70 text-sm">
                    Constantly pushing boundaries and exploring new possibilities in AI and autonomous systems.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                  <p className="text-white/70 text-sm">
                    Working together with clients, partners, and the community to achieve shared goals.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Trust</h3>
                  <p className="text-white/70 text-sm">
                    Building reliable, secure, and transparent systems that clients can depend on.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Growth</h3>
                  <p className="text-white/70 text-sm">
                    Continuous learning and improvement, both for our systems and our team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Focus */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Technology Focus</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Cutting-edge technologies that power our autonomous solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Artificial Intelligence</h3>
                  <p className="text-white/70 text-sm">
                    Advanced machine learning, neural networks, and AI algorithms that enable autonomous decision-making and learning.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Quantum Computing</h3>
                  <p className="text-white/70 text-sm">
                    Next-generation computing that unlocks new possibilities in AI, cryptography, and complex problem-solving.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                  <p className="text-white/70 text-sm">
                    Advanced security protocols and autonomous threat detection systems that protect our clients' digital assets.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">☁️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
                  <p className="text-white/70 text-sm">
                    Scalable, resilient cloud platforms that power our autonomous services and ensure high availability.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">⛓️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Blockchain</h3>
                  <p className="text-white/70 text-sm">
                    Distributed ledger technology that provides transparency, security, and trust in our autonomous systems.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Autonomous Systems</h3>
                  <p className="text-white/70 text-sm">
                    Self-managing, self-improving systems that operate independently and continuously optimize performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 px-6 bg-white/5">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  World-class experts in AI, machine learning, cybersecurity, and autonomous systems
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Researchers</h3>
                  <p className="text-white/70 text-sm">
                    PhD-level researchers pushing the boundaries of artificial intelligence and autonomous systems.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Security Experts</h3>
                  <p className="text-white/70 text-sm">
                    Cybersecurity specialists ensuring our autonomous systems are secure, compliant, and trustworthy.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Engineers</h3>
                  <p className="text-white/70 text-sm">
                    Full-stack engineers building robust, scalable platforms that power our autonomous services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of organizations already benefiting from our autonomous AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services" 
                  className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </section>
        </main>

        <SmartFooter />
      </div>
    </>
  );
}
