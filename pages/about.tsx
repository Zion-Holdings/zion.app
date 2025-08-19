import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and AI-powered solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </div>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                <p className="text-lg text-white/90 mb-6">
                  Zion Tech Group is dedicated to creating a world where technology works autonomously, 
                  intelligently adapting and evolving to meet humanity's needs. We believe in the power 
                  of autonomous systems to solve complex problems and drive innovation.
                </p>
                <p className="text-lg text-white/90">
                  Our mission is to develop and deploy cutting-edge AI and automation technologies that 
                  enhance human capabilities while maintaining the highest standards of safety, ethics, 
                  and responsibility.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Core Values</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span><strong>Innovation:</strong> Pushing boundaries of what's possible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span><strong>Autonomy:</strong> Building self-sufficient systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span><strong>Responsibility:</strong> Ethical AI development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✦</span>
                    <span><strong>Excellence:</strong> Uncompromising quality standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">Foundation</h3>
                  <p className="text-white/80">
                    Founded in 2023 with a vision to revolutionize how technology serves humanity through autonomous systems.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Innovation</h3>
                  <p className="text-white/80">
                    Developed breakthrough autonomous technologies and AI systems that operate independently and intelligently.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-300">Expansion</h3>
                  <p className="text-white/80">
                    Growing globally with 227 autonomous systems and serving clients across 47 countries worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-8 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Technology Stack</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Advanced AI/ML algorithms</li>
                  <li>• Autonomous automation systems</li>
                  <li>• Quantum computing research</li>
                  <li>• Blockchain and Web3 integration</li>
                  <li>• Edge computing and IoT</li>
                  <li>• Cloud-native architectures</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 p-8 rounded-2xl border border-fuchsia-500/30">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Industries Served</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Financial Services</li>
                  <li>• Healthcare & Life Sciences</li>
                  <li>• Manufacturing & Logistics</li>
                  <li>• Energy & Sustainability</li>
                  <li>• Education & Research</li>
                  <li>• Government & Defense</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join Our Mission</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                We're always looking for partners, clients, and team members who share our vision 
                of a future powered by intelligent, autonomous technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </a>
                <a href="/automation" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Explore Our Solutions
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}