import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — Autonomous Innovation Hub | AI, Automation & Cloud Solutions</title>
        <meta name="description" content="Leading-edge autonomous technology solutions with 227+ automations, comprehensive redundancy systems, AI development, and cloud-native infrastructure. Transform your business with intelligent automation." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge autonomous technology solutions with 227+ automations, AI development, and cloud-native infrastructure." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400 font-medium">227+ Active Automations</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto mb-8 leading-relaxed">
              The world's most advanced <span className="text-cyan-400 font-semibold">autonomous innovation hub</span> delivering cutting-edge AI solutions, 
              intelligent automation systems, and cloud-native infrastructure that runs itself.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/about" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Discover Our Mission
              </Link>
              <Link href="/services" className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25">
                Explore Services
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                View Success Stories
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">227+</div>
                <div className="text-sm text-white/70">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400">2,960+</div>
                <div className="text-sm text-white/70">Generated Pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-white/70">Autonomous Operation</div>
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Revolutionary Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI & Machine Learning</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Advanced AI systems with autonomous learning, natural language processing, and predictive analytics that continuously improve without human intervention.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Autonomous Learning Systems</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision & Recognition</li>
                  <li>• Predictive Analytics & Forecasting</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Autonomous Automation */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Autonomous Automation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Self-running automation systems that monitor, maintain, and optimize themselves across development, deployment, and operations.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Self-Healing Infrastructure</li>
                  <li>• Continuous Integration/Deployment</li>
                  <li>• Automated Testing & Quality Control</li>
                  <li>• Intelligent Resource Management</li>
                </ul>
                <Link href="/automation" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                  Explore Automation <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Cloud-Native Architecture */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Cloud-Native Architecture</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Scalable, resilient cloud infrastructure with auto-scaling, load balancing, and intelligent resource optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Auto-Scaling Infrastructure</li>
                  <li>• Load Balancing & Distribution</li>
                  <li>• Intelligent Resource Management</li>
                  <li>• Multi-Cloud Redundancy</li>
                </ul>
                <Link href="/resources" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                  View Resources <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Comprehensive Redundancy */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Comprehensive Redundancy</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Multi-layered redundancy systems ensuring 99.9% uptime with automatic failover, backup systems, and disaster recovery.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Multi-Layer Failover Systems</li>
                  <li>• Automated Disaster Recovery</li>
                  <li>• Real-Time Health Monitoring</li>
                  <li>• Zero-Downtime Deployments</li>
                </ul>
                <Link href="/redundancy" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  Learn About Redundancy <span className="ml-2">→</span>
                </Link>
              </div>

              {/* DevOps & CI/CD */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">DevOps & CI/CD</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Streamlined development pipelines with automated testing, building, deployment, and monitoring for rapid, reliable software delivery.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Automated CI/CD Pipelines</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Automated Testing & Validation</li>
                  <li>• Performance Monitoring</li>
                </ul>
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  View DevOps Services <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Data Analytics */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Data Analytics</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Advanced analytics and business intelligence solutions that transform raw data into actionable insights and predictive models.
                </p>
                <ul className="space-y-2 text-sm text-white/70 mb-6">
                  <li>• Real-Time Data Processing</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence Dashboards</li>
                  <li>• Machine Learning Insights</li>
                </ul>
                <Link href="/resources" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  Explore Analytics <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Solutions Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Featured Solutions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI-Powered Manufacturing */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🏭</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-medium">Featured Case Study</div>
                    <div className="text-2xl font-bold text-cyan-400">40%</div>
                    <div className="text-sm text-white/70">Efficiency Increase</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Manufacturing Automation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Revolutionized manufacturing processes with autonomous AI systems for predictive maintenance, quality control, and production optimization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">IoT Sensors</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Predictive Analytics</span>
                  </div>
                  <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Content Generation Scale */}
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">✍️</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400 font-medium">Featured Case Study</div>
                    <div className="text-2xl font-bold text-fuchsia-400">10x</div>
                    <div className="text-sm text-white/70">Content Output</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scaling Content Generation 10x</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Transformed content creation through autonomous AI systems with human oversight and quality control, achieving unprecedented scale.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full">NLP</span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">SEO Automation</span>
                    <span className="px-3 py-1 bg-pink-400/20 text-pink-400 text-xs rounded-full">Analytics</span>
                  </div>
                  <Link href="/case-studies" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Advanced Technology Stack
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">React 18</h3>
                <p className="text-sm text-white/70">Modern UI Framework</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🟢</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Node.js 20</h3>
                <p className="text-sm text-white/70">Runtime Environment</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔷</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">TypeScript</h3>
                <p className="text-sm text-white/70">Type-Safe Development</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Tailwind CSS</h3>
                <p className="text-sm text-white/70">Utility-First CSS</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Netlify</h3>
                <p className="text-sm text-white/70">Cloud Platform</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">OpenAI GPT</h3>
                <p className="text-sm text-white/70">AI Integration</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Supabase</h3>
                <p className="text-sm text-white/70">Backend Services</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">PM2</h3>
                <p className="text-sm text-white/70">Process Manager</p>
              </div>
            </div>
          </section>

          {/* Quick Navigation Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Explore Our Platform
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/about" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">About Us</h3>
                <p className="text-white/70 text-sm mb-4">Discover our mission, vision, and the team behind Zion Tech Group</p>
                <div className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </div>
              </Link>
              
              <Link href="/services" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Services</h3>
                <p className="text-white/70 text-sm mb-4">Explore our comprehensive AI, automation, and technology solutions</p>
                <div className="text-fuchsia-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Services →
                </div>
              </Link>
              
              <Link href="/resources" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Resources</h3>
                <p className="text-white/70 text-sm mb-4">Access tools, whitepapers, and insights for your AI journey</p>
                <div className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Browse Resources →
                </div>
              </Link>
              
              <Link href="/case-studies" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Case Studies</h3>
                <p className="text-white/70 text-sm mb-4">See real success stories and transformation results</p>
                <div className="text-yellow-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Cases →
                </div>
              </Link>
              
              <Link href="/blog" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Blog & Insights</h3>
                <p className="text-white/70 text-sm mb-4">Stay updated with the latest AI trends and insights</p>
                <div className="text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Read Blog →
                </div>
              </Link>
              
              <Link href="/contact" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Contact Us</h3>
                <p className="text-white/70 text-sm mb-4">Get in touch to discuss your AI transformation needs</p>
                <div className="text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Get Started →
                </div>
              </Link>
              
              <Link href="/reports" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">Reports & Analytics</h3>
                <p className="text-white/70 text-sm mb-4">Access detailed reports and performance analytics</p>
                <div className="text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Reports →
                </div>
              </Link>
              
              <Link href="/automation" className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 text-center hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">Automation Hub</h3>
                <p className="text-white/70 text-sm mb-4">Explore our 227+ autonomous automation systems</p>
                <div className="text-indigo-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Explore Automation →
                </div>
              </Link>
            </div>
          </section>

          {/* Latest Autonomous Content Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Content</h2>
            <p className="text-center text-white/70 mb-8 max-w-3xl mx-auto">
              Fresh content generated by our autonomous AI systems, continuously updating and improving our platform
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join the future of autonomous technology. Our AI systems are ready to revolutionize your operations, 
                boost efficiency, and drive innovation across your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Your Transformation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  See Success Stories
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
