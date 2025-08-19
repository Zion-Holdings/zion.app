import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <>
      <Head>
        <title>Automation — Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's autonomous automation systems and intelligent technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Autonomous Automation
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Experience the future of technology with our self-running, self-improving autonomous systems.
              </p>
            </section>

            {/* Hero Section */}
            <section className="mb-16">
              <div className="bg-white/10 rounded-3xl p-12 border border-white/20 text-center">
                <div className="text-6xl mb-6">🤖</div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  Technology That Works While You Sleep
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                  Our autonomous systems operate 24/7, continuously monitoring, optimizing, and 
                  improving your technology infrastructure without human intervention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/reports" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                    View Live Reports
                  </Link>
                  <Link href="/automation-health" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                    System Health
                  </Link>
                </div>
              </div>
            </section>

            {/* Core Automation Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-fuchsia-400">Core Automation Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Continuous Deployment</h3>
                  <p className="text-white/70">
                    Automated CI/CD pipelines that deploy updates safely and efficiently, 
                    with zero-downtime deployments and automatic rollbacks.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Intelligent Monitoring</h3>
                  <p className="text-white/70">
                    AI-powered monitoring that detects issues before they become problems, 
                    with predictive analytics and automated alerting.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">Security Automation</h3>
                  <p className="text-white/70">
                    Automated security scanning, threat detection, and response systems 
                    that protect your infrastructure 24/7.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Performance Optimization</h3>
                  <p className="text-white/70">
                    Continuous performance monitoring and automatic optimization that 
                    ensures your systems run at peak efficiency.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Content Generation</h3>
                  <p className="text-white/70">
                    AI-powered content creation that generates reports, documentation, 
                    and updates automatically.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Self-Healing</h3>
                  <p className="text-white/70">
                    Systems that automatically detect and resolve issues, restart failed 
                    services, and maintain optimal performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Automation Statistics */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Automation Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">227</div>
                  <div className="text-white/70">Active Automations</div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">99.9%</div>
                  <div className="text-white/70">Uptime</div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-white/70">Operation</div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                  <div className="text-white/70">Manual Interventions</div>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">How It Works</h2>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-cyan-400">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
                    <p className="text-white/80">
                      Our autonomous systems continuously monitor all aspects of your technology 
                      infrastructure, collecting data on performance, security, and reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-fuchsia-400">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Intelligent Analysis</h3>
                    <p className="text-white/80">
                      Advanced AI algorithms analyze the collected data to identify patterns, 
                      predict potential issues, and determine optimal solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-green-400">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Automated Action</h3>
                    <p className="text-white/80">
                      The system automatically implements the best solutions, whether that's 
                      deploying updates, optimizing performance, or resolving security threats.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold text-yellow-400">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                    <p className="text-white/80">
                      Every action and outcome is analyzed to improve future decision-making, 
                      creating a system that gets smarter and more efficient over time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Use Cases</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">E-commerce Platforms</h3>
                  <p className="text-white/80 mb-4">
                    Automatically scale infrastructure during traffic spikes, optimize 
                    performance for conversions, and maintain 99.9% uptime during peak seasons.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Automatic traffic scaling</li>
                    <li>• Performance optimization</li>
                    <li>• Security monitoring</li>
                    <li>• Content updates</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Financial Services</h3>
                  <p className="text-white/80 mb-4">
                    Ensure compliance, security, and performance for critical financial 
                    applications with automated monitoring and response systems.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Compliance monitoring</li>
                    <li>• Security automation</li>
                    <li>• Performance tracking</li>
                    <li>• Audit logging</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Healthcare Systems</h3>
                  <p className="text-white/80 mb-4">
                    Maintain critical healthcare infrastructure with automated backups, 
                    security monitoring, and performance optimization.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• HIPAA compliance</li>
                    <li>• Automated backups</li>
                    <li>• Security monitoring</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Content Platforms</h3>
                  <p className="text-white/80 mb-4">
                    Automatically generate, optimize, and distribute content while 
                    maintaining optimal performance and user experience.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Content generation</li>
                    <li>• SEO optimization</li>
                    <li>• Performance monitoring</li>
                    <li>• User experience tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Ready to Automate?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of autonomous technology and transform your 
                operations with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  Get Started
                </Link>
                <Link href="/reports" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  View Demo
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}