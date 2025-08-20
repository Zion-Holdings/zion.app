import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security & Monitoring — Zion Tech Group | Autonomous Innovation Hub</title>
        <meta name="description" content="Advanced security systems with continuous monitoring, automated threat response, vulnerability assessment, and intelligent security orchestration." />
        <meta property="og:title" content="Security & Monitoring — Zion Tech Group" />
        <meta property="og:description" content="Advanced security systems with continuous monitoring and automated threat response." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Security & Monitoring
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Advanced autonomous security systems that continuously monitor, detect, and respond to threats 
              in real-time with zero human intervention.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/80">32+ Security Automations Active</span>
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Comprehensive Security Features
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Continuous Security Scanning */}
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">Continuous Security Scanning</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  24/7 automated security scanning across all systems, dependencies, and infrastructure. 
                  Real-time vulnerability detection with instant threat assessment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span className="text-white/70">Dependency Vulnerability Scanning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span className="text-white/70">Infrastructure Security Audits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span className="text-white/70">Code Security Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span className="text-white/70">Real-time Threat Detection</span>
                  </div>
                </div>
              </div>

              {/* Automated Threat Response */}
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Automated Threat Response</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Intelligent threat response systems that automatically contain, isolate, and remediate 
                  security incidents without human intervention.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-white/70">Instant Incident Containment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-white/70">Automated Remediation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-white/70">Threat Intelligence Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-white/70">Response Orchestration</span>
                  </div>
                </div>
              </div>

              {/* Compliance Monitoring */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">Compliance Monitoring</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Continuous compliance monitoring across multiple frameworks and standards. 
                  Automated reporting and audit trail generation for regulatory requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">GDPR Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">ISO 27001 Standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-white/70">Automated Audit Reports</span>
                  </div>
                </div>
              </div>

              {/* Intelligent Monitoring */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">Intelligent Monitoring</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  AI-powered monitoring systems that learn from patterns, predict potential threats, 
                  and adapt security measures in real-time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Behavioral Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Threat Prediction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Adaptive Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/70">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Metrics */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Security Performance Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                <div className="text-white/70 mb-4">Uptime</div>
                <div className="text-sm text-white/50">Continuous monitoring ensures maximum availability</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;1s</div>
                <div className="text-white/70 mb-4">Response Time</div>
                <div className="text-sm text-white/50">Instant threat detection and response</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-white/70 mb-4">Security Breaches</div>
                <div className="text-sm text-white/50">Zero successful attacks in production</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-white/70 mb-4">Monitoring</div>
                <div className="text-sm text-white/50">Round-the-clock security surveillance</div>
              </div>
            </div>
          </section>

          {/* Security Technologies */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Advanced Security Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Zero Trust Architecture</h3>
                <p className="text-white/80 text-center mb-6">
                  Never trust, always verify approach with continuous authentication and authorization
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">Intrusion Prevention</h3>
                <p className="text-white/80 text-center mb-6">
                  Advanced IPS/IDS systems with machine learning threat detection
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Encryption at Rest</h3>
                <p className="text-white/80 text-center mb-6">
                  AES-256 encryption for all stored data and communications
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Security Analytics</h3>
                <p className="text-white/80 text-center mb-6">
                  Real-time security intelligence and predictive analytics
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">Web Application Firewall</h3>
                <p className="text-white/80 text-center mb-6">
                  Advanced WAF protection against OWASP Top 10 vulnerabilities
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-indigo-400/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 text-center">Incident Response</h3>
                <p className="text-white/80 text-center mb-6">
                  Automated incident response with playbook execution
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20">
            <div className="bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Secure Your Digital Infrastructure
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience enterprise-grade security with autonomous monitoring and response. 
                Let our systems protect your assets 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Get Security Assessment
                </Link>
                <Link href="/automation" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                  Learn About Automation
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}