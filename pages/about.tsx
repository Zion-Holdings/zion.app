import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and intelligent automation systems." />
        <meta property="og:title" content="About Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to revolutionize technology through autonomous innovation and intelligent automation systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems
              </p>
            </header>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                At Zion Tech Group, we believe in the power of autonomous innovation to solve humanity's greatest challenges. 
                Our mission is to create intelligent systems that operate independently, continuously learning and improving 
                without human intervention.
              </p>
              <p className="text-lg text-white/80">
                We envision a world where technology works seamlessly in the background, anticipating needs, solving problems, 
                and creating opportunities that were previously unimaginable.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Autonomous Innovation</h3>
                <p className="text-white/80 mb-4">
                  Our core technology revolves around autonomous agents that can think, learn, and act independently. 
                  These AI-powered systems continuously evolve and adapt to changing environments and requirements.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Self-learning algorithms</li>
                  <li>• Adaptive decision making</li>
                  <li>• Continuous improvement cycles</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Cloud-Native Architecture</h3>
                <p className="text-white/80 mb-4">
                  Built from the ground up for the cloud era, our systems leverage the latest in distributed computing, 
                  microservices, and containerization technologies.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>• Microservices architecture</li>
                  <li>• Container orchestration</li>
                  <li>• Auto-scaling capabilities</li>
                  <li>• Global distribution</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/80">Active Automations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">2,960</div>
                  <div className="text-white/80">Pages Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="font-semibold mb-2 text-fuchsia-300">Frontend</h4>
                  <p className="text-sm text-white/70">Next.js, React, TypeScript</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="font-semibold mb-2 text-fuchsia-300">Backend</h4>
                  <p className="text-sm text-white/70">Node.js, Python, Go</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="font-semibold mb-2 text-fuchsia-300">AI/ML</h4>
                  <p className="text-sm text-white/70">TensorFlow, PyTorch, OpenAI</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <h4 className="font-semibold mb-2 text-fuchsia-300">Infrastructure</h4>
                  <p className="text-sm text-white/70">AWS, Docker, Kubernetes</p>
                </div>
              </div>
            </section>

            <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">Join the Future</h2>
              <p className="text-lg text-white/80 mb-6">
                We're always looking for visionary thinkers, innovative developers, and passionate technologists 
                who want to shape the future of autonomous technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Get in Touch
                </a>
                <a 
                  href="/" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
                >
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