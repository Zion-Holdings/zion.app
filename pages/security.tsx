import React from 'react';
import Head from 'next/head';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security | Zion Tech Group - Enterprise Security & Compliance</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and enterprise-grade protection for your data and systems." />
        <meta property="og:title" content="Security | Zion Tech Group" />
        <meta property="og:description" content="Enterprise security measures and compliance standards for data protection." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Security & Compliance
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Enterprise-grade security measures and compliance standards ensuring the highest level of protection for your data and systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Security Assessment
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Security Services
              </a>
            </div>
          </section>

          {/* Security Overview */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Security Framework</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Data Protection</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  End-to-end encryption, secure data transmission, and comprehensive backup strategies ensuring your data remains protected at all times.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AES-256 Encryption</li>
                  <li>• TLS 1.3 Protocols</li>
                  <li>• Secure Data Centers</li>
                  <li>• Automated Backups</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-300">Access Control</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Multi-factor authentication, role-based access control, and continuous monitoring to prevent unauthorized access to systems and data.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• MFA Implementation</li>
                  <li>• RBAC Systems</li>
                  <li>• Session Management</li>
                  <li>• Access Logging</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-300">Threat Detection</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Advanced threat detection systems, real-time monitoring, and automated response mechanisms to identify and mitigate security risks.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI-Powered Detection</li>
                  <li>• Real-time Monitoring</li>
                  <li>• Automated Response</li>
                  <li>• Incident Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Compliance & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">SOC 2 Type II</h3>
                <p className="text-white/70 mb-4">
                  Service Organization Control 2 compliance ensuring security, availability, processing integrity, confidentiality, and privacy.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-blue-400">Status:</span> Certified
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-4 text-green-400">GDPR Compliance</h3>
                <p className="text-white/70 mb-4">
                  General Data Protection Regulation compliance ensuring data privacy and protection for EU citizens.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-green-400">Status:</span> Fully Compliant
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">ISO 27001</h3>
                <p className="text-white/70 mb-4">
                  Information Security Management System certification for comprehensive information security controls.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-purple-400">Status:</span> Certified
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">PCI DSS</h3>
                <p className="text-white/70 mb-4">
                  Payment Card Industry Data Security Standard for secure payment processing and cardholder data protection.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-orange-400">Status:</span> Level 1 Compliant
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-4 text-pink-400">HIPAA</h3>
                <p className="text-white/70 mb-4">
                  Health Insurance Portability and Accountability Act compliance for healthcare data protection and privacy.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-pink-400">Status:</span> Compliant
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">FedRAMP</h3>
                <p className="text-white/70 mb-4">
                  Federal Risk and Authorization Management Program for cloud service providers serving federal agencies.
                </p>
                <div className="text-sm text-white/60">
                  <span className="text-cyan-400">Status:</span> In Progress
                </div>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Advanced Security Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Infrastructure Security</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• DDoS Protection & Mitigation</li>
                  <li>• Web Application Firewalls</li>
                  <li>• Intrusion Detection Systems</li>
                  <li>• Network Segmentation</li>
                  <li>• Secure API Gateways</li>
                  <li>• Container Security</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">Application Security</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Static Application Security Testing</li>
                  <li>• Dynamic Application Security Testing</li>
                  <li>• Interactive Application Security Testing</li>
                  <li>• Dependency Vulnerability Scanning</li>
                  <li>• Secure Code Review</li>
                  <li>• Penetration Testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Metrics */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Security Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">99.99%</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Uptime</h3>
                <p className="text-white/70">System availability</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">&lt;1s</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-fuchsia-300">Response Time</h3>
                <p className="text-white/70">Threat detection</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">0</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-300">Data Breaches</h3>
                <p className="text-white/70">Security incidents</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">24/7</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">Monitoring</h3>
                <p className="text-white/70">Security operations</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl font-bold mb-6 text-white/90">Secure Your Digital Future</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Partner with Zion Tech Group for enterprise-grade security solutions that protect your business and ensure compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                  Security Assessment
                </a>
                <a href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                  Security Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}