import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  const automationSystems = [
    {
      id: 1,
      name: "Content Generation Engine",
      description: "AI-powered system that autonomously creates, optimizes, and manages digital content across multiple platforms.",
      status: "Active",
      uptime: "99.9%",
      efficiency: "94%",
      icon: "✍️",
      features: ["SEO Optimization", "Multi-language Support", "Content Scheduling", "Performance Analytics"]
    },
    {
      id: 2,
      name: "Infrastructure Monitor",
      description: "Continuous monitoring and self-healing system that maintains optimal performance across all cloud infrastructure.",
      status: "Active",
      uptime: "99.7%",
      efficiency: "97%",
      icon: "🔧",
      features: ["Auto-scaling", "Load Balancing", "Error Detection", "Performance Optimization"]
    },
    {
      id: 3,
      name: "Security Sentinel",
      description: "Advanced threat detection and response system that protects against cyber attacks in real-time.",
      status: "Active",
      uptime: "99.8%",
      efficiency: "96%",
      icon: "🛡️",
      features: ["Threat Detection", "Automated Response", "Vulnerability Scanning", "Compliance Monitoring"]
    },
    {
      id: 4,
      name: "Data Analytics Pipeline",
      description: "Real-time data processing and analytics system that provides insights and drives decision-making.",
      status: "Active",
      uptime: "99.6%",
      efficiency: "92%",
      icon: "📊",
      features: ["Real-time Processing", "Predictive Analytics", "Data Visualization", "Machine Learning"]
    },
    {
      id: 5,
      name: "Deployment Orchestrator",
      description: "Automated CI/CD pipeline that manages deployments with zero downtime and intelligent rollback capabilities.",
      status: "Active",
      uptime: "99.5%",
      efficiency: "95%",
      icon: "🚀",
      features: ["Continuous Deployment", "A/B Testing", "Rollback Management", "Performance Monitoring"]
    },
    {
      id: 6,
      name: "Customer Experience Optimizer",
      description: "AI-driven system that personalizes user experiences and optimizes conversion rates in real-time.",
      status: "Active",
      uptime: "99.4%",
      efficiency: "89%",
      icon: "🎯",
      features: ["Personalization", "A/B Testing", "Conversion Optimization", "User Behavior Analysis"]
    }
  ];

  const metrics = [
    { label: "Total Automations", value: "227", change: "+12", changeType: "positive" },
    { label: "System Uptime", value: "99.7%", change: "+0.3%", changeType: "positive" },
    { label: "Content Generated", value: "2,960", change: "+156", changeType: "positive" },
    { label: "Performance Gain", value: "23%", change: "+5%", changeType: "positive" }
  ];

  return (
    <>
      <Head>
        <title>Automation Solutions | Zion Tech Group - Autonomous Systems</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems. Discover AI-powered solutions that operate 24/7 with self-healing capabilities and continuous optimization." />
        <meta property="og:title" content="Automation Solutions | Zion Tech Group - Autonomous Systems" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems. Discover AI-powered solutions that operate 24/7 with self-healing capabilities and continuous optimization." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Autonomous Automation
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Experience the future of technology with our self-managing, intelligent systems that operate 24/7, 
              continuously learn, and automatically optimize performance.
            </p>
          </header>

          {/* Key Metrics */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{metric.value}</div>
                  <div className="text-white/80 mb-2">{metric.label}</div>
                  <div className={`text-sm ${
                    metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Dashboard Preview */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-300">Live System Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🟢</div>
                  <div className="text-lg font-semibold text-white">All Systems Operational</div>
                  <div className="text-sm text-white/70 mt-2">227 automations running</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="text-lg font-semibold text-white">Peak Performance</div>
                  <div className="text-sm text-white/70 mt-2">99.7% efficiency</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🔮</div>
                  <div className="text-lg font-semibold text-white">Predictive Mode</div>
                  <div className="text-sm text-white/70 mt-2">AI learning active</div>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link 
                  href="/live-dashboard"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  View Live Dashboard →
                </Link>
              </div>
            </div>
          </section>

          {/* Automation Systems */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-300">Our Autonomous Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationSystems.map((system) => (
                <div key={system.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{system.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      system.status === 'Active' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {system.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {system.name}
                  </h3>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {system.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-300">{system.uptime}</div>
                      <div className="text-xs text-white/60">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-fuchsia-300">{system.efficiency}</div>
                      <div className="text-xs text-white/60">Efficiency</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white/90">Key Features:</h4>
                    <ul className="space-y-1">
                      {system.features.map((feature, index) => (
                        <li key={index} className="text-xs text-white/70 flex items-center gap-2">
                          <span className="text-cyan-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-300">How Autonomous Automation Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">🧠</div>
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">1. Intelligent Analysis</h3>
                <p className="text-white/80 text-sm">AI systems continuously analyze data and identify optimization opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">⚡</div>
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">2. Automatic Execution</h3>
                <p className="text-white/80 text-sm">Systems automatically implement improvements without human intervention</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">📈</div>
                </div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">3. Performance Monitoring</h3>
                <p className="text-white/80 text-sm">Real-time tracking of system performance and outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">🔄</div>
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">4. Continuous Learning</h3>
                <p className="text-white/80 text-sm">AI models learn from results and improve future decisions</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Ready to Automate Your Future?</h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join the autonomous revolution and experience technology that works for you 24/7. 
                Our systems never sleep, never stop learning, and never stop improving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  href="/reports"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  View Reports
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}