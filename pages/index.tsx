import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-400 font-bold">227+</span> Intelligent Automations
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-fuchsia-400 font-bold">2960+</span> Dynamic Pages
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-400 font-bold">12</span> Core Components
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-400 font-bold">100%</span> Autonomous
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">99.99%</span> Uptime
              </div>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                About Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                AI Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </Link>
            </div>
          </section>

          {/* Revolutionary Platform Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Revolutionary Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Autonomous Cloud Systems */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Cloud Systems</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Self-healing CI/CD pipelines</li>
                  <li>• Intelligent build orchestration</li>
                  <li>• Automated dependency management</li>
                  <li>• Real-time performance monitoring</li>
                  <li>• Zero-downtime deployments</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/automation" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Explore Automation →
                  </Link>
                </div>
              </div>

              {/* AI-Powered Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI-Powered Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• 227+ autonomous agents</li>
                  <li>• Intelligent content generation</li>
                  <li>• Automated quality assurance</li>
                  <li>• Smart error recovery</li>
                  <li>• Predictive maintenance</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/blog/ai-automation-trends-2025" className="text-fuchsia-400 hover:text-fuchsia-300 text-sm font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Redundancy & Reliability */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Redundancy & Reliability</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-layer redundancy systems</li>
                  <li>• Automatic failover protection</li>
                  <li>• Continuous health monitoring</li>
                  <li>• Self-repairing infrastructure</li>
                  <li>• Geographic distribution</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/automation-health" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    View Health Status →
                  </Link>
                </div>
              </div>

              {/* Advanced Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Advanced Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Real-time performance metrics</li>
                  <li>• Automated health checks</li>
                  <li>• Predictive failure detection</li>
                  <li>• Comprehensive logging systems</li>
                  <li>• AI-driven insights</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/live-dashboard" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                    Live Dashboard →
                  </Link>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat detection & response</li>
                  <li>• Zero-trust architecture</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/security" className="text-red-400 hover:text-red-300 text-sm font-semibold">
                    Security Details →
                  </Link>
                </div>
              </div>

              {/* Global Infrastructure */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Global Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Multi-region deployment</li>
                  <li>• Edge computing optimization</li>
                  <li>• Global CDN integration</li>
                  <li>• Geographic redundancy</li>
                  <li>• Low-latency routing</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/performance" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Performance Metrics →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Technology Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Advanced Technology Stack & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Next.js 15</h3>
                <p className="text-white/70 text-sm">React framework with SSR/SSG</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🐳</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Docker & PM2</h3>
                <p className="text-white/70 text-sm">Container orchestration</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Netlify Functions</h3>
                <p className="text-white/70 text-sm">Serverless backend services</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">GitHub Actions</h3>
                <p className="text-white/70 text-sm">CI/CD automation</p>
              </div>
            </div>
          </section>

          {/* Revolutionary Platform Advantages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🎯 Why Zion Tech Group is Revolutionary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Zero Human Intervention</h3>
                    <p className="text-white/80 text-sm">Our platform operates completely autonomously with 227+ intelligent automations handling every aspect of development, deployment, and maintenance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Intelligent Self-Healing</h3>
                    <p className="text-white/80 text-sm">Advanced AI systems automatically detect, diagnose, and resolve issues before they impact users, ensuring 99.99% uptime.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Multi-Layer Redundancy</h3>
                    <p className="text-white/80 text-sm">Comprehensive redundancy systems ensure continuous operation even during catastrophic failures or infrastructure issues.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Predictive Analytics</h3>
                    <p className="text-white/80 text-sm">AI-powered monitoring predicts potential issues and automatically implements preventive measures before problems occur.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Enterprise Security</h3>
                    <p className="text-white/80 text-sm">Zero-trust architecture with automated security scanning, compliance monitoring, and threat response systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Global Scale</h3>
                    <p className="text-white/80 text-sm">Multi-region deployment with edge computing optimization and global CDN integration for worldwide performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Core Features & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Content Generation */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">AI Content Generation</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Automated blog creation</li>
                  <li>• SEO-optimized content</li>
                  <li>• Multi-language support</li>
                  <li>• Content quality assurance</li>
                </ul>
                <div className="text-center">
                  <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    View Generated Content →
                  </Link>
                </div>
              </div>

              {/* Automation Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Automation Orchestration</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Master automation control</li>
                  <li>• Intelligent scheduling</li>
                  <li>• Cross-system coordination</li>
                  <li>• Performance optimization</li>
                </ul>
                <div className="text-center">
                  <Link href="/automation" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                    Explore Automations →
                  </Link>
                </div>
              </div>

              {/* Monitoring & Analytics */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Advanced Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Real-time dashboards</li>
                  <li>• Performance metrics</li>
                  <li>• Health monitoring</li>
                  <li>• Predictive analytics</li>
                </ul>
                <div className="text-center">
                  <Link href="/live-dashboard" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                    Live Dashboard →
                  </Link>
                </div>
              </div>

              {/* Redundancy Systems */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Redundancy Infrastructure</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Multi-layer backup systems</li>
                  <li>• Automatic failover</li>
                  <li>• Geographic distribution</li>
                  <li>• Self-repair mechanisms</li>
                </ul>
                <div className="text-center">
                  <Link href="/automation-health" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Health Status →
                  </Link>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Automated scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat response</li>
                </ul>
                <div className="text-center">
                  <Link href="/security" className="text-red-400 hover:text-red-300 text-sm font-semibold">
                    Security Details →
                  </Link>
                </div>
              </div>

              {/* Performance Optimization */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Performance Optimization</h3>
                <ul className="text-white/80 text-sm space-y-2 mb-6">
                  <li>• Lighthouse optimization</li>
                  <li>• Core Web Vitals</li>
                  <li>• CDN optimization</li>
                  <li>• Load balancing</li>
                </ul>
                <div className="text-center">
                  <Link href="/performance" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Performance Metrics →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Project Showcase */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Project Showcase & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Case Studies */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Case Studies</h3>
                <p className="text-white/80 text-sm mb-6 text-center">
                  Real-world implementations and success stories showcasing our autonomous platform capabilities.
                </p>
                <div className="text-center">
                  <Link href="/case-studies" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg text-white font-semibold transition-all duration-300">
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Resources</h3>
                <p className="text-white/80 text-sm mb-6 text-center">
                  Comprehensive documentation, guides, and resources for developers and organizations.
                </p>
                <div className="text-center">
                  <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-semibold transition-all duration-300">
                    Browse Resources
                  </Link>
                </div>
              </div>

              {/* Blog & Insights */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">Blog & Insights</h3>
                <p className="text-white/80 text-sm mb-6 text-center">
                  Latest insights on AI automation, cloud technology, and autonomous systems.
                </p>
                <div className="text-center">
                  <Link href="/blog" className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300">
                    Read Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Details */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🛠️ Complete Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Frontend */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">Frontend</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Next.js 15</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-green-400 mb-4 text-center">Backend</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Node.js</li>
                  <li>• Netlify Functions</li>
                  <li>• PM2 Process Manager</li>
                  <li>• Docker Containers</li>
                  <li>• Microservices</li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">Infrastructure</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• GitHub Actions</li>
                  <li>• Netlify Platform</li>
                  <li>• Global CDN</li>
                  <li>• Edge Computing</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>

              {/* Automation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4 text-center">Automation</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• 227+ Scripts</li>
                  <li>• AI Agents</li>
                  <li>• Cron Jobs</li>
                  <li>• Webhooks</li>
                  <li>• Orchestration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join the revolution in autonomous technology. Experience zero-downtime operations, intelligent automation, and the most advanced cloud infrastructure ever built.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold text-lg transition-all duration-300 border border-white/30">
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Links Footer */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">Technology</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/automation" className="text-white/70 hover:text-white transition-colors">Automation</Link></li>
                  <li><Link href="/automation-health" className="text-white/70 hover:text-white transition-colors">Health Status</Link></li>
                  <li><Link href="/live-dashboard" className="text-white/70 hover:text-white transition-colors">Live Dashboard</Link></li>
                  <li><Link href="/performance" className="text-white/70 hover:text-white transition-colors">Performance</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/resources" className="text-white/70 hover:text-white transition-colors">Resources</Link></li>
                  <li><Link href="/api-documentation" className="text-white/70 hover:text-white transition-colors">API Docs</Link></li>
                  <li><Link href="/component-library" className="text-white/70 hover:text-white transition-colors">Components</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Support</Link></li>
                  <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/reports" className="text-white/70 hover:text-white transition-colors">Reports</Link></li>
                  <li><Link href="/enhanced-navigation" className="text-white/70 hover:text-white transition-colors">Navigation</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
