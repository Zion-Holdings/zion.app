import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
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
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-white/90 mb-6">
                  To revolutionize the technology landscape by creating autonomous systems that operate independently, 
                  continuously learn, and deliver exceptional value to our clients and partners.
                </p>
                <p className="text-white/80">
                  We believe in the power of artificial intelligence to transform how businesses operate, 
                  making complex processes simple, efficient, and intelligent.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                <p className="text-lg text-white/90 mb-6">
                  To be the global leader in autonomous technology solutions, setting new standards for 
                  innovation, reliability, and intelligent automation across all industries.
                </p>
                <p className="text-white/80">
                  We envision a world where technology works seamlessly in the background, 
                  enabling humans to focus on creativity, strategy, and meaningful work.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Innovation</h3>
                  <p className="text-white/80">Constantly pushing boundaries and exploring new possibilities in technology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Reliability</h3>
                  <p className="text-white/80">Building systems that work consistently and can be trusted 24/7</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Collaboration</h3>
                  <p className="text-white/80">Working together with clients and partners to achieve shared success</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Story</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <p className="text-lg text-white/90 mb-6">
                  Founded in 2023, Zion Tech Group emerged from a vision to create technology that works autonomously. 
                  Our founders recognized that the future of business lay not in manual processes, but in intelligent, 
                  self-operating systems that could adapt and improve over time.
                </p>
                <p className="text-lg text-white/90 mb-6">
                  Starting with a small team of AI researchers and software engineers, we've grown into a 
                  comprehensive technology company that serves clients across multiple industries. Our autonomous 
                  systems now handle everything from content generation to infrastructure management.
                </p>
                <p className="text-lg text-white/90">
                  Today, we continue to push the boundaries of what's possible, developing new AI models, 
                  expanding our automation capabilities, and helping businesses transform their operations 
                  through intelligent technology solutions.
                </p>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/80 mb-8">
                Join the autonomous revolution and discover how our technology can work for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Get Started
                </Link>
                <Link href="/" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}