import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About | Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
                  <p className="text-lg text-white/90 mb-6">
                    To revolutionize the technology landscape by creating autonomous systems that continuously innovate, 
                    optimize, and deliver exceptional value to our clients and partners.
                  </p>
                  <p className="text-white/80 mb-6">
                    We believe in the power of artificial intelligence to transform businesses, streamline operations, 
                    and create sustainable competitive advantages in an ever-evolving digital world.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/90">Autonomous innovation and continuous improvement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/90">Cutting-edge technology solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/90">Sustainable business transformation</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-white">Core Values</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
                        <p className="text-white/80">Constantly pushing boundaries and exploring new possibilities in technology.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Trust &amp; Reliability</h4>
                        <p className="text-white/80">Building systems that our clients can depend on 24/7.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
                        <p className="text-white/80">Working together with clients to achieve shared success.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-cyan-300">Our Story</h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">The Beginning</h3>
                  <p className="text-white/90">
                    Founded with a vision to create technology that works autonomously, Zion Tech Group emerged from 
                    the recognition that traditional IT solutions were no longer sufficient for the rapidly evolving 
                    digital landscape. We saw an opportunity to leverage artificial intelligence and automation to 
                    create systems that could think, learn, and improve independently.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">The Evolution</h3>
                  <p className="text-white/90">
                    Over the years, we&apos;ve developed increasingly sophisticated autonomous systems that can handle 
                    complex tasks, make intelligent decisions, and continuously optimize performance. Our technology 
                    has evolved from simple automation scripts to comprehensive AI-powered platforms that can manage 
                    entire infrastructure ecosystems.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">The Future</h3>
                  <p className="text-white/90">
                    Today, we&apos;re at the forefront of autonomous technology innovation. Our systems operate 24/7, 
                    continuously learning and improving, while providing our clients with unprecedented levels of 
                    efficiency, reliability, and innovation. We&apos;re committed to pushing the boundaries of what&apos;s 
                    possible with autonomous technology.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center text-cyan-300">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Research &amp; Development</h3>
                  <p className="text-white/80">
                    Continuous investment in cutting-edge research to stay ahead of technological trends and 
                    develop innovative solutions that address real-world challenges.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                  <p className="text-white/80">
                    Rapid deployment of proven solutions with comprehensive testing and validation to ensure 
                    reliability and performance in production environments.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
                  <p className="text-white/80">
                    Continuous monitoring and autonomous optimization of deployed systems to ensure peak 
                    performance and maximum value delivery over time.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Join Us on the Journey</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the future of autonomous technology and discover how our innovative solutions 
                can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </Link>
                <Link href="/contact" className="border border-white/20 hover:border-cyan-400/50 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/10">
                  Get in Touch
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}