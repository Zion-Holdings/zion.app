import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, vision, and commitment to autonomous innovation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Pioneering the future of autonomous technology and intelligent automation systems.
              </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  To revolutionize technology operations through autonomous systems that continuously 
                  improve, adapt, and innovate without human intervention. We believe in creating 
                  technology that works for humanity, not the other way around.
                </p>
                <p className="text-lg text-white/80">
                  Our autonomous platforms handle everything from content generation to system 
                  optimization, security monitoring to performance tuning, ensuring maximum 
                  efficiency and reliability.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
                <p className="text-lg text-white/80 mb-6">
                  A world where technology systems are self-healing, self-optimizing, and 
                  self-improving. Where businesses can focus on innovation while their 
                  infrastructure runs autonomously in the background.
                </p>
                <p className="text-lg text-white/80">
                  We envision a future where AI-powered automation handles the complexity 
                  of modern technology, freeing human creativity for what matters most.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-3">Autonomous Operations</h3>
                  <p className="text-white/70">
                    Self-running systems that monitor, maintain, and optimize technology 
                    infrastructure 24/7 without human intervention.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold mb-3">Intelligent Security</h3>
                  <p className="text-white/70">
                    AI-powered threat detection and response systems that adapt to new 
                    security challenges in real-time.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
                  <p className="text-white/70">
                    Comprehensive monitoring and analytics that provide deep insights into 
                    system performance and optimization opportunities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Technology Stack</h2>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend & UI</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Next.js with TypeScript</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• React components and hooks</li>
                      <li>• Responsive design systems</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Backend & Automation</h3>
                    <ul className="space-y-2 text-white/70">
                      <li>• Node.js and PM2 process management</li>
                      <li>• GitHub Actions for CI/CD</li>
                      <li>• Automated testing and deployment</li>
                      <li>• Cloud-native architecture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Our Approach</h2>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Continuous Innovation</h3>
                  <p className="text-white/80">
                    We believe in constantly pushing the boundaries of what's possible. Our 
                    autonomous systems are designed to learn, adapt, and improve continuously, 
                    ensuring that our solutions remain at the cutting edge of technology.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Reliability First</h3>
                  <p className="text-white/80">
                    Every system we build prioritizes reliability and uptime. Our autonomous 
                    platforms include comprehensive redundancy, self-healing capabilities, and 
                    continuous monitoring to ensure maximum availability.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Transparency</h3>
                  <p className="text-white/80">
                    We believe in complete transparency in our operations. All system activities, 
                    performance metrics, and updates are publicly available, allowing our 
                    community to understand and trust our autonomous systems.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Ready to Experience the Future?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join us in exploring the possibilities of autonomous technology and discover 
                how our systems can transform your digital operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/reports" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  View Our Reports
                </Link>
                <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
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