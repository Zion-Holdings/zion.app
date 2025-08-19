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
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </a>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12 text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
                  About Zion Tech Group
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pioneering the future of autonomous technology and intelligent automation systems
                </p>
              </header>
              
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-white/90 mb-6">
                  At Zion Tech Group, we believe in the power of autonomous innovation to transform how businesses operate, 
                  how content is created, and how technology serves humanity. Our mission is to build intelligent systems 
                  that work tirelessly to optimize, create, and innovate without human intervention.
                </p>
                <p className="text-lg text-white/90">
                  We're not just building automation tools – we're creating digital ecosystems that think, learn, and 
                  evolve independently, driving exponential growth and innovation across all industries.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-6">Core Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Autonomous Content Generation</h3>
                    <p className="text-white/80">
                      AI-powered systems that create, optimize, and distribute content across multiple platforms 
                      with zero human intervention.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Intelligent Automation</h3>
                    <p className="text-white/80">
                      Self-healing workflows that monitor, optimize, and improve business processes automatically.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance Optimization</h3>
                    <p className="text-white/80">
                      Real-time monitoring and optimization systems that ensure peak performance across all platforms.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Security & Compliance</h3>
                    <p className="text-white/80">
                      Automated security scanning, threat detection, and compliance monitoring systems.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-6">Why Autonomous?</h2>
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                      <p className="text-white/80">Continuous operation without breaks or downtime</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                      <p className="text-white/80">Unlimited scalability and growth potential</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                      <p className="text-white/80">Consistent quality and performance</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">For Businesses</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• 10x faster content creation and deployment</li>
                      <li>• 99.9% system uptime and reliability</li>
                      <li>• Automated optimization and scaling</li>
                      <li>• Reduced operational costs by 60%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">For the Future</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Democratizing access to advanced technology</li>
                      <li>• Accelerating innovation across industries</li>
                      <li>• Creating sustainable, scalable solutions</li>
                      <li>• Building the foundation for AGI</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">Join the Revolution</h2>
                <p className="text-lg text-white/80 mb-8">
                  Ready to experience the future of autonomous technology? 
                  Let's build something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Get Started
                  </a>
                  <a 
                    href="/" 
                    className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}