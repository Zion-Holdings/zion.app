import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Pioneering the future of autonomous technology and AI-driven innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  At Zion Tech Group, we're building the world's most advanced autonomous 
                  technology ecosystem. Our mission is to create systems that think, learn, 
                  and evolve independently, revolutionizing how businesses operate and 
                  how people interact with technology.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We believe in a future where technology works seamlessly in the background, 
                  continuously optimizing and improving without human intervention, while 
                  maintaining the highest standards of security, reliability, and performance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Core Values</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">●</span>
                    <span><strong>Innovation:</strong> Pushing boundaries of what's possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">●</span>
                    <span><strong>Autonomy:</strong> Building self-sufficient systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">●</span>
                    <span><strong>Excellence:</strong> Maintaining highest quality standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-xl">●</span>
                    <span><strong>Security:</strong> Protecting users and systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-colors">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
                  <p className="text-white/70">
                    We develop AI-powered systems that operate independently, 
                    continuously learning and improving their performance.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-colors">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cloud Automation</h3>
                  <p className="text-white/70">
                    Our cloud automation solutions handle complex infrastructure 
                    management with minimal human oversight.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-colors">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Security & Monitoring</h3>
                  <p className="text-white/70">
                    Advanced security systems that detect and respond to threats 
                    in real-time, protecting your digital assets.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
                  'Node.js', 'Python', 'AI/ML', 'Cloud Native',
                  'Docker', 'Kubernetes', 'GitHub Actions', 'Netlify'
                ].map((tech, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center border border-white/20 hover:border-cyan-400/30 transition-colors">
                    <div className="text-white font-medium">{tech}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">Proven Track Record</h4>
                      <p className="text-white/70 text-sm">Successfully deployed 227+ autonomous systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">24/7 Operation</h4>
                      <p className="text-white/70 text-sm">Systems that never sleep, always optimizing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">Scalable Solutions</h4>
                      <p className="text-white/70 text-sm">Built to grow with your business needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">AI-Powered</h4>
                      <p className="text-white/70 text-sm">Cutting-edge machine learning algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">Cost Effective</h4>
                      <p className="text-white/70 text-sm">Reduce operational costs through automation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 text-xl mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold text-white">Future Ready</h4>
                      <p className="text-white/70 text-sm">Built for tomorrow's technology landscape</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join the future of autonomous technology. Let's discuss how Zion Tech Group 
                can transform your business operations with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/" 
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}