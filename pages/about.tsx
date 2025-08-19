import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
        <meta property="og:title" content="About Zion Tech Group | Autonomous Innovation Hub" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation and cutting-edge technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </header>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
              <p className="text-lg text-white/80 mb-4">
                Zion Tech Group is dedicated to revolutionizing the technology landscape through autonomous innovation, 
                intelligent automation, and cutting-edge AI solutions. We believe in creating systems that work 
                independently, continuously learn, and adapt to meet the evolving needs of our digital world.
              </p>
              <p className="text-lg text-white/80">
                Our mission is to build a future where technology serves humanity autonomously, efficiently, 
                and ethically, driving progress across industries and empowering organizations to achieve 
                unprecedented levels of productivity and innovation.
              </p>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-white/70">Pushing boundaries and exploring new frontiers in technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-white/70">Building systems that work consistently and dependably</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Security</h3>
                  <p className="text-white/70">Ensuring the highest standards of data protection and privacy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-white/70">Working together to achieve greater impact and innovation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Creativity</h3>
                  <p className="text-white/70">Thinking outside the box to solve complex challenges</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Passion</h3>
                  <p className="text-white/70">Driven by our love for technology and its potential</p>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-white/80">
                  Founded with a vision to create truly autonomous systems, Zion Tech Group emerged from the 
                  recognition that the future of technology lies in intelligent automation that can operate 
                  independently while continuously improving and adapting.
                </p>
                <p className="text-lg text-white/80">
                  Our journey began with a simple question: "What if technology could think for itself?" 
                  This curiosity led us to develop sophisticated AI systems, autonomous workflows, and 
                  intelligent automation solutions that are reshaping industries across the globe.
                </p>
                <p className="text-lg text-white/80">
                  Today, we stand at the forefront of autonomous technology, with over 200+ automation 
                  systems running continuously, generating content, optimizing performance, and driving 
                  innovation without human intervention. Our commitment to excellence and our passion for 
                  pushing technological boundaries continues to drive us forward.
                </p>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                We're always looking for passionate individuals and organizations who share our vision 
                of a future powered by autonomous innovation. Whether you're interested in partnering 
                with us, joining our team, or learning more about our technology, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Get in Touch
                </a>
                <a href="/" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center">
                  Explore Our Work
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}