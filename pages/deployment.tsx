import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DeploymentPage() {
  return (
    <>
      <Head>
        <title>Cloud Infrastructure & Deployment | Zion Tech Group - Scalable Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's cloud-native infrastructure featuring Next.js 13+, Netlify edge functions, automated deployments, and global CDN distribution." />
        <meta property="og:title" content="Cloud Infrastructure & Deployment - Zion Tech Group" />
        <meta property="og:description" content="Cloud-native infrastructure with automated deployments and global CDN distribution." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Cloud Infrastructure & Deployment
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Scalable, resilient cloud-native platform with automated deployments and global distribution
            </p>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Next.js 13+ with App Router</h3>
                <p className="text-white/70 mb-6">
                  Latest React framework with server-side rendering, static generation, and optimized performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Server-side rendering</li>
                  <li>• Static site generation</li>
                  <li>• API routes</li>
                  <li>• Image optimization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Netlify Edge Functions</h3>
                <p className="text-white/70 mb-6">
                  Serverless functions deployed globally for lightning-fast response times and scalability.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Global deployment</li>
                  <li>• Auto-scaling</li>
                  <li>• Edge computing</li>
                  <li>• Serverless architecture</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Automated Deployments</h3>
                <p className="text-white/70 mb-6">
                  Continuous integration and deployment pipelines that ensure rapid, reliable releases.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• CI/CD pipelines</li>
                  <li>• Automated testing</li>
                  <li>• Zero-downtime deployments</li>
                  <li>• Rollback capabilities</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Global CDN Distribution</h3>
                <p className="text-white/70 mb-6">
                  Content delivery network spanning multiple continents for optimal user experience worldwide.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Multi-region deployment</li>
                  <li>• Edge caching</li>
                  <li>• Geographic optimization</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Infrastructure Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Lightning Fast</h3>
                <p className="text-white/70">
                  Sub-second response times with global CDN distribution and edge computing optimization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Infinitely Scalable</h3>
                <p className="text-white/70">
                  Auto-scaling infrastructure that handles traffic spikes and grows with your business needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Enterprise Security</h3>
                <p className="text-white/70">
                  Built-in security features, SSL certificates, and compliance with industry standards.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Deployment Process</h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">1. Automated Build Process</h3>
                <p className="text-white/70 mb-4">
                  Our CI/CD pipeline automatically builds, tests, and validates your application before deployment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔨</div>
                    <div className="text-sm text-white/60">Code Compilation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🧪</div>
                    <div className="text-sm text-white/60">Automated Testing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-sm text-white/60">Quality Validation</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">2. Global Distribution</h3>
                <p className="text-white/70 mb-4">
                  Once validated, your application is deployed to multiple regions worldwide for optimal performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌍</div>
                    <div className="text-sm text-white/60">Multi-Region</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm text-white/60">Edge Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="text-sm text-white/60">Auto-Sync</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">3. Continuous Monitoring</h3>
                <p className="text-white/70 mb-4">
                  Real-time monitoring ensures your application performs optimally and issues are detected instantly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm text-white/60">Performance Metrics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="text-sm text-white/60">Health Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚨</div>
                    <div className="text-sm text-white/60">Alert System</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Scale Globally?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of cloud-native infrastructure with automated deployments and global distribution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border border-green-400/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-emerald-400/50">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}