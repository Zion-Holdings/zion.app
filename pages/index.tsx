import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered cloud systems, and comprehensive redundancy infrastructure. Experience the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Leading-edge autonomous technology platform with 227+ automations, AI-powered cloud systems, and comprehensive redundancy infrastructure." />
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
              Autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure. 
              Experience 227+ automations, comprehensive redundancy systems, and AI-powered content generation across 2960+ pages.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-400 font-bold">227+</span> Automations
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-fuchsia-400 font-bold">2960+</span> Pages
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-400 font-bold">12</span> Components
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-400 font-bold">100%</span> Autonomous
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">50+</span> Scripts
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-purple-400 font-bold">24/7</span> Monitoring
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

          {/* Core Features & Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🚀 Core Platform Capabilities</h2>
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
                  <li>• PM2 process management</li>
                  <li>• Docker containerization</li>
                </ul>
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
                  <li>• MCP integration systems</li>
                  <li>• LinkedIn automation</li>
                </ul>
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
                  <li>• Ultimate redundancy v2</li>
                  <li>• Comprehensive backup systems</li>
                </ul>
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
                  <li>• Build failure recovery</li>
                  <li>• Continuous build monitoring</li>
                </ul>
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
                  <li>• Pre-commit hooks</li>
                  <li>• Security automation</li>
                </ul>
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
                  <li>• Netlify functions</li>
                  <li>• GitHub Actions integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">⚡ Technology Stack & Infrastructure</h2>
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

          {/* Automation Scripts & Tools */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🛠️ Automation Scripts & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Build & Development Tools */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔨</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Build & Development</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:smart</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:orchestrator</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:recovery</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:monitor</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:guardian</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run build:heal</code></li>
                </ul>
              </div>

              {/* Redundancy & Monitoring */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Redundancy & Monitoring</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:start</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:orchestrator</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:pm2</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:github</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:netlify</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run redundancy:status</code></li>
                </ul>
              </div>

              {/* AI & Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI & Automation</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run autonomous</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run auto:intel</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run mcp:start</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run mcp:workflow</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run linkedin:run</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run google-docs:start</code></li>
                </ul>
              </div>

              {/* Content & SEO Tools */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Content & SEO</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run sitemap</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run search:index</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run content:fix</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run readme:generate</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run front:advertise</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run netlify:manifest</code></li>
                </ul>
              </div>

              {/* Security & Maintenance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Maintenance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run security:scan</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run deps:maintain</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run fix:all</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run type-check</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run lint</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run ci:heal</code></li>
                </ul>
              </div>

              {/* Process Management */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Process Management</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run pm2:start</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run pm2:restart</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run pm2:status</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run pm2:logs</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run functions:run</code></li>
                  <li>• <code className="bg-white/10 px-2 py-1 rounded">npm run cursor:memory</code></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Automation Capabilities */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔧 Advanced Automation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Build & Deployment Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Build & Deployment</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Master build orchestrator</li>
                  <li>• Build failure recovery</li>
                  <li>• Continuous build monitoring</li>
                  <li>• Smart build automation</li>
                  <li>• Pre-build health checks</li>
                  <li>• Build guardian systems</li>
                </ul>
              </div>

              {/* Content & SEO Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Content & SEO</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• AI content generation</li>
                  <li>• Automated SEO optimization</li>
                  <li>• Content quality analysis</li>
                  <li>• Sitemap generation</li>
                  <li>• Search index creation</li>
                  <li>• Content health monitoring</li>
                </ul>
              </div>

              {/* Marketing & Social Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📢</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Marketing & Social</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• LinkedIn automation</li>
                  <li>• Instagram marketing</li>
                  <li>• Marketing sync systems</li>
                  <li>• Social media orchestration</li>
                  <li>• Content distribution</li>
                  <li>• Campaign automation</li>
                </ul>
              </div>

              {/* Monitoring & Analytics */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Monitoring & Analytics</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Performance monitoring</li>
                  <li>• Lighthouse optimization</li>
                  <li>• Health reporting</li>
                  <li>• Real-time dashboards</li>
                  <li>• Automated alerts</li>
                  <li>• Predictive analytics</li>
                </ul>
              </div>

              {/* Security & Compliance */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Security & Compliance</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Automated security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance monitoring</li>
                  <li>• Threat detection</li>
                  <li>• Security automation</li>
                  <li>• Risk management</li>
                </ul>
              </div>

              {/* Integration & APIs */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Integration & APIs</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• MCP integration</li>
                  <li>• Google Docs automation</li>
                  <li>• API orchestration</li>
                  <li>• Webhook management</li>
                  <li>• Third-party integrations</li>
                  <li>• Custom API development</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Platform Advantages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🎯 Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">Zero-Downtime Operations</h3>
                    <p className="text-white/80">Our autonomous systems ensure 99.99% uptime with automatic failover and self-healing capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI-Powered Innovation</h3>
                    <p className="text-white/80">Leverage 227+ autonomous agents that continuously improve your systems and generate intelligent content.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Scalable Architecture</h3>
                    <p className="text-white/80">Built for exponential growth with automatic scaling, load balancing, and global distribution.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Proactive Monitoring</h3>
                    <p className="text-white/80">Real-time health monitoring with predictive analytics and automated issue resolution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Enterprise Security</h3>
                    <p className="text-white/80">Bank-grade security with automated threat detection, compliance monitoring, and data protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Future-Ready Platform</h3>
                    <p className="text-white/80">Continuously evolving with cutting-edge technologies and autonomous system improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏆 Competitive Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Autonomous Innovation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Autonomous Innovation</h3>
                <p className="text-white/80 text-sm">Unlike traditional platforms, our systems continuously improve themselves without human intervention, delivering exponential growth and innovation.</p>
              </div>

              {/* Comprehensive Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Comprehensive Redundancy</h3>
                <p className="text-white/80 text-sm">Multi-layer redundancy systems with automatic failover, ensuring 99.99% uptime even during catastrophic failures.</p>
              </div>

              {/* AI-Powered Content */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4 text-center">AI-Powered Content</h3>
                <p className="text-white/80 text-sm">227+ autonomous agents generate, optimize, and distribute content automatically, keeping your platform always fresh and engaging.</p>
              </div>

              {/* Enterprise Security */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Enterprise Security</h3>
                <p className="text-white/80 text-sm">Bank-grade security with automated threat detection, compliance monitoring, and proactive vulnerability management.</p>
              </div>

              {/* Global Infrastructure */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Global Infrastructure</h3>
                <p className="text-white/80 text-sm">Multi-region deployment with edge computing optimization and global CDN integration for worldwide performance.</p>
              </div>

              {/* Continuous Evolution */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Continuous Evolution</h3>
                <p className="text-white/80 text-sm">Our platform evolves continuously with cutting-edge technologies, autonomous improvements, and future-ready architecture.</p>
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🔗 Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm">Our mission & vision</p>
              </Link>
              
              <Link href="/services" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">AI Services</h3>
                <p className="text-white/70 text-sm">Intelligent solutions</p>
              </Link>
              
              <Link href="/resources" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm">Tools & insights</p>
              </Link>
              
              <Link href="/case-studies" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm">Success stories</p>
              </Link>
              
              <Link href="/blog" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✍️</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Blog</h3>
                <p className="text-white/70 text-sm">Latest insights</p>
              </Link>
              
              <Link href="/contact" className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Contact</h3>
                <p className="text-white/70 text-sm">Get in touch</p>
              </Link>
            </div>
          </section>

          {/* Project Documentation & Resources */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">📚 Project Documentation & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Architecture & Design */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Architecture & Design</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <a href="/ARCHITECTURE.md" className="text-cyan-300 hover:text-cyan-200 underline">ARCHITECTURE.md</a></li>
                  <li>• <a href="/API.md" className="text-cyan-300 hover:text-cyan-200 underline">API.md</a></li>
                  <li>• <a href="/DEPLOYMENT.md" className="text-cyan-300 hover:text-cyan-200 underline">DEPLOYMENT.md</a></li>
                  <li>• <a href="/PERFORMANCE.md" className="text-cyan-300 hover:text-cyan-200 underline">PERFORMANCE.md</a></li>
                  <li>• <a href="/SECURITY.md" className="text-cyan-300 hover:text-cyan-200 underline">SECURITY.md</a></li>
                  <li>• <a href="/TESTING.md" className="text-cyan-300 hover:text-cyan-200 underline">TESTING.md</a></li>
                </ul>
              </div>

              {/* Automation & Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Automation & Redundancy</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <a href="/COMPREHENSIVE_REDUNDANCY_README.md" className="text-green-300 hover:text-green-200 underline">Comprehensive Redundancy</a></li>
                  <li>• <a href="/ULTIMATE_REDUNDANCY_AUTOMATION_README.md" className="text-green-300 hover:text-green-200 underline">Ultimate Redundancy</a></li>
                  <li>• <a href="/REDUNDANCY_AUTOMATION_README.md" className="text-green-300 hover:text-green-200 underline">Redundancy Automation</a></li>
                  <li>• <a href="/AUTOMATION_COMPLETION_REPORT.md" className="text-green-300 hover:text-green-200 underline">Automation Report</a></li>
                  <li>• <a href="/EXPONENTIAL_GROWTH_AUTOMATION.md" className="text-green-300 hover:text-green-200 underline">Growth Automation</a></li>
                  <li>• <a href="/SERVICE_GENERATION_README.md" className="text-green-300 hover:text-green-200 underline">Service Generation</a></li>
                </ul>
              </div>

              {/* Development & Contributing */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Development & Contributing</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• <a href="/CONTRIBUTING.md" className="text-purple-300 hover:text-purple-200 underline">Contributing Guide</a></li>
                  <li>• <a href="/README.md" className="text-purple-300 hover:text-purple-200 underline">Main README</a></li>
                  <li>• <a href="/FINAL_PROJECT_STATUS_2025-01-17.md" className="text-purple-300 hover:text-purple-200 underline">Project Status</a></li>
                  <li>• <a href="/FINAL_WORKFLOW_FIX_SUMMARY.md" className="text-purple-300 hover:text-purple-200 underline">Workflow Summary</a></li>
                  <li>• <a href="/GITHUB_ACTIONS_IMPROVEMENTS.md" className="text-purple-300 hover:text-purple-200 underline">GitHub Actions</a></li>
                  <li>• <a href="/REACT_VERSION_FIX.md" className="text-purple-300 hover:text-purple-200 underline">React Version Fix</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Call to Action */}
          <section className="text-center mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future of Autonomous Technology?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of organizations leveraging our AI-powered platform for unprecedented efficiency and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Journey
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all duration-300 hover:border-cyan-400/50">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
