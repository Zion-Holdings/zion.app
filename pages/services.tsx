import React from 'react';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - Autonomous Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, content generation, and infrastructure optimization." />
        <meta property="og:title" content="Services | Zion Tech Group - Autonomous Technology Solutions" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive range of autonomous technology services including AI automation, content generation, and infrastructure optimization." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <header className="mb-16 text-center">
              <nav className="mb-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive autonomous technology solutions that revolutionize how businesses 
                operate and innovate in the digital age.
              </p>
            </header>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Content Generation</h3>
                  <p className="text-white/80 mb-6">
                    Autonomous systems that create high-quality, SEO-optimized content 
                    across multiple platforms and formats, continuously learning and improving.
                  </p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Blog posts and articles</li>
                    <li>• Technical documentation</li>
                    <li>• Marketing copy</li>
                    <li>• Social media content</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Infrastructure Automation</h3>
                  <p className="text-white/80 mb-6">
                    Self-healing, self-optimizing systems that automatically maintain, 
                    monitor, and improve technology infrastructure without human intervention.
                  </p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Performance monitoring</li>
                    <li>• Auto-scaling</li>
                    <li>• Security management</li>
                    <li>• Resource optimization</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:border-purple-400/30 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Research & Development</h3>
                  <p className="text-white/80 mb-6">
                    Cutting-edge research in autonomous systems, machine learning, 
                    and artificial intelligence, driving innovation across all domains.
                  </p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Neural network development</li>
                    <li>• Algorithm optimization</li>
                    <li>• Model training</li>
                    <li>• Innovation consulting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Specialized Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-8 rounded-2xl border border-cyan-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Content Management Systems</h3>
                  <p className="text-white/80 mb-6">
                    Intelligent content management powered by AI that automatically 
                    organizes, optimizes, and distributes content across all channels.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">Automated content scheduling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">SEO optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">Multi-platform distribution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">Performance analytics</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 p-8 rounded-2xl border border-fuchsia-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">Cloud Infrastructure</h3>
                  <p className="text-white/80 mb-6">
                    Autonomous cloud infrastructure that self-optimizes, scales, 
                    and maintains high availability across multiple cloud providers.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">Auto-scaling capabilities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">Load balancing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">Disaster recovery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">Cost optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-cyan-400">Lightning Fast</h4>
                  <p className="text-white/70 text-sm">
                    Autonomous systems operate 24/7 with instant response times
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Reliable</h4>
                  <p className="text-white/70 text-sm">
                    99.9% uptime with self-healing capabilities
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-purple-400">Innovative</h4>
                  <p className="text-white/70 text-sm">
                    Continuously evolving AI systems that learn and improve
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Secure</h4>
                  <p className="text-white/70 text-sm">
                    Enterprise-grade security with autonomous threat detection
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Transform your business with autonomous technology solutions that work 
                around the clock to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-200"
                >
                  Get a Quote
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}