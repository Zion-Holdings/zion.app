import React from 'react';
import Head from 'next/head';

export default function AutomationPage() {
  const automationSystems = [
    {
      name: "Content Generation Engine",
      status: "Active",
      uptime: "99.9%",
      description: "AI-powered content creation and optimization system",
      metrics: {
        contentGenerated: "2,847 articles",
        optimizationScore: "94/100",
        languages: "12 supported"
      }
    },
    {
      name: "Performance Monitor",
      status: "Active",
      uptime: "99.9%",
      description: "Real-time system performance monitoring and optimization",
      metrics: {
        responseTime: "1.2s average",
        errorRate: "0.01%",
        uptime: "99.9%"
      }
    },
    {
      name: "Security Sentinel",
      status: "Active",
      uptime: "99.9%",
      description: "Autonomous threat detection and response system",
      metrics: {
        threatsBlocked: "1,234",
        falsePositives: "0.1%",
        responseTime: "<1s"
      }
    },
    {
      name: "SEO Optimizer",
      status: "Active",
      uptime: "99.9%",
      description: "Automatic search engine optimization and monitoring",
      metrics: {
        keywordsOptimized: "5,678",
        rankingImprovements: "23%",
        pagesMonitored: "1,234"
      }
    },
    {
      name: "Content Distributor",
      status: "Active",
      uptime: "99.9%",
      description: "Multi-platform content distribution and engagement",
      metrics: {
        platforms: "8 channels",
        reach: "2.3M users",
        engagement: "12.4%"
      }
    },
    {
      name: "Health Checker",
      status: "Active",
      uptime: "99.9%",
      description: "System health monitoring and self-healing",
      metrics: {
        issuesResolved: "156",
        preventionRate: "98%",
        recoveryTime: "<5min"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Automation Systems | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's autonomous automation systems that power intelligent content generation, performance optimization, and security." />
        <meta property="og:title" content="Automation Systems | Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's autonomous automation systems that power intelligent content generation, performance optimization, and security." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <nav className="mb-6 text-left">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  ← Back to Home
                </a>
              </nav>
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Autonomous Automation Systems
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the intelligent systems that power Zion Tech Group's autonomous operations, 
                from content generation to security monitoring.
              </p>
            </header>

            <section className="mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">System Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">6</div>
                    <div className="text-white/70">Active Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-white/70">Average Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-white/70">Operation</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Automation Systems</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {automationSystems.map((system, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{system.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        system.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {system.status}
                      </span>
                    </div>
                    
                    <p className="text-white/70 mb-4">{system.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm text-white/60">Uptime: </span>
                      <span className="text-cyan-400 font-medium">{system.uptime}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {Object.entries(system.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="text-white/80 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">Data Collection</h3>
                    <p className="text-white/70">
                      Our systems continuously collect data from multiple sources, including user behavior, 
                      system performance, and external factors.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">AI Analysis</h3>
                    <p className="text-white/70">
                      Advanced AI algorithms analyze the collected data to identify patterns, 
                      predict trends, and make intelligent decisions.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-green-300">Autonomous Action</h3>
                    <p className="text-white/70">
                      Systems automatically execute actions based on AI analysis, 
                      continuously learning and improving their performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-500/30">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Automate?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Discover how our autonomous systems can transform your business operations 
                  and unlock new levels of efficiency and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                    Get Started
                  </a>
                  <a href="/api-documentation" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                    View API Docs
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}