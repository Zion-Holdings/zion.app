import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of autonomous AI features including monitoring, auto-healing, security, and analytics." />
        <meta property="og:title" content="Features — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive suite of autonomous AI features including monitoring, auto-healing, security, and analytics." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make Zion Tech Group the leader in autonomous infrastructure management.
            </p>
          </section>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#ai-agents" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
              AI Agents
            </a>
            <a href="#monitoring" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
              Monitoring
            </a>
            <a href="#auto-healing" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
              Auto-healing
            </a>
            <a href="#security" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
              Security
            </a>
            <a href="#analytics" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
              Analytics
            </a>
            <a href="#automation" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
              Automation
            </a>
          </nav>

          {/* AI Agents Section */}
          <section id="ai-agents" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Autonomous AI Agents</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our intelligent AI agents work autonomously to monitor, optimize, and improve your infrastructure 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">Intelligent Decision Making</h3>
                      <p className="text-white/70">
                        AI agents analyze complex data patterns and make intelligent decisions to optimize performance, security, and resource utilization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">Continuous Learning</h3>
                      <p className="text-white/70">
                        Agents continuously learn from system behavior, user patterns, and performance metrics to improve their decision-making over time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">Proactive Optimization</h3>
                      <p className="text-white/70">
                        Instead of reactive responses, our AI agents proactively identify potential issues and optimize systems before problems occur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">AI Agent Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Real-time system monitoring',
                    'Predictive failure analysis',
                    'Automated resource scaling',
                    'Intelligent load balancing',
                    'Performance optimization',
                    'Security threat detection',
                    'Compliance monitoring',
                    'Cost optimization'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Monitoring Section */}
          <section id="monitoring" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Monitoring & Observability</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive monitoring that provides deep insights into every aspect of your infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Real-time Metrics</h3>
                <p className="text-white/70">
                  Monitor CPU, memory, disk, network, and application performance in real-time with millisecond precision.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">Distributed Tracing</h3>
                <p className="text-white/70">
                  Track requests across microservices and identify performance bottlenecks with end-to-end visibility.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Predictive Analytics</h3>
                <p className="text-white/70">
                  ML-powered analytics that predict potential issues before they impact your users or systems.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Monitoring Dashboard Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Custom dashboards',
                  'Alert management',
                  'Historical data analysis',
                  'Performance baselines',
                  'Capacity planning',
                  'Cost tracking',
                  'Compliance reporting',
                  'API monitoring'
                ].map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-white/80 text-sm">{feature}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Auto-healing Section */}
          <section id="auto-healing" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Auto-healing Systems</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Systems that automatically detect, diagnose, and resolve issues without human intervention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Auto-healing Workflow</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Detection', desc: 'AI identifies anomalies and potential issues' },
                    { step: '2', title: 'Analysis', desc: 'Deep analysis of root causes and impact' },
                    { step: '3', title: 'Resolution', desc: 'Automated fixes and system recovery' },
                    { step: '4', title: 'Verification', desc: 'Confirm resolution and system health' },
                    { step: '5', title: 'Learning', desc: 'Update AI models for future prevention' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-white/70">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">Automatic Recovery</h3>
                      <p className="text-white/70">
                        Systems automatically restart failed services, restore from backups, and implement failover procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-400 mb-2">Rollback Protection</h3>
                      <p className="text-white/70">
                        Safe deployment with automatic rollback capabilities if issues are detected after updates.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-2">Smart Notifications</h3>
                      <p className="text-white/70">
                        Intelligent alerting that only notifies humans when intervention is actually required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Multi-layered security with continuous monitoring and automated threat response.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Security Features</h3>
                <div className="space-y-4">
                  {[
                    'Real-time threat detection',
                    'Automated vulnerability scanning',
                    'Intrusion prevention systems',
                    'Data encryption at rest & transit',
                    'Access control & authentication',
                    'Compliance monitoring',
                    'Security incident response',
                    'Audit logging & reporting'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Compliance Standards</h3>
                <div className="space-y-4">
                  {[
                    'SOC 2 Type II',
                    'ISO 27001',
                    'GDPR compliance',
                    'HIPAA ready',
                    'PCI DSS',
                    'FedRAMP',
                    'NIST framework',
                    'Industry-specific standards'
                  ].map((standard, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-white/80">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Analytics Section */}
          <section id="analytics" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Analytics & Insights</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Transform raw data into actionable insights with our powerful analytics platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Performance Analytics</h3>
                <p className="text-white/70">
                  Deep insights into system performance, bottlenecks, and optimization opportunities.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Cost Optimization</h3>
                <p className="text-white/70">
                  Identify cost-saving opportunities and optimize resource utilization across your infrastructure.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">Predictive Insights</h3>
                <p className="text-white/70">
                  ML-powered predictions for capacity planning, scaling decisions, and risk assessment.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Analytics Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Real-time dashboards',
                  'Custom reporting',
                  'Data visualization',
                  'Trend analysis',
                  'Anomaly detection',
                  'Capacity forecasting',
                  'ROI calculations',
                  'Benchmark comparisons'
                ].map((capability, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-white/80 text-sm">{capability}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Automation Section */}
          <section id="automation" className="mx-auto max-w-7xl px-6 pb-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Automation</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                End-to-end automation that handles every aspect of your infrastructure management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Automation Areas</h3>
                <div className="space-y-4">
                  {[
                    'Infrastructure provisioning',
                    'Application deployment',
                    'Configuration management',
                    'Backup & recovery',
                    'Scaling & load balancing',
                    'Security updates',
                    'Performance tuning',
                    'Disaster recovery'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Automation Benefits</h3>
                <div className="space-y-4">
                  {[
                    '99.9% uptime guarantee',
                    '90% reduction in manual tasks',
                    '60% faster deployment',
                    '50% cost savings',
                    '24/7 operation',
                    'Zero human error',
                    'Instant scalability',
                    'Proactive maintenance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-4xl px-6 pb-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience the Future of Infrastructure
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Ready to see these features in action? Contact us for a personalized demo and discover how Zion Tech Group can transform your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105">
                  Request Demo
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}