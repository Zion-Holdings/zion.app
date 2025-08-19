import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security — Zion Tech Group</title>
        <meta name="description" content="Security practices, policies, and measures implemented by Zion Tech Group to protect our systems and data." />
        <meta property="og:title" content="Security — Zion Tech Group" />
        <meta property="og:description" content="Security practices, policies, and measures implemented by Zion Tech Group to protect our systems and data." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Security</h1>
            <p className="text-xl text-white/80">Protecting your data and systems with enterprise-grade security</p>
          </div>

          {/* Security Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Our Security Commitment</h2>
              <p className="text-white/80 mb-4">
                At Zion Tech Group, security is not just a feature—it's the foundation of everything we build. We implement 
                industry-leading security practices to ensure the protection of your data, systems, and digital assets.
              </p>
            </div>
          </section>

          {/* Security Features Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Encryption</h3>
                <p className="text-white/70">End-to-end encryption for all data in transit and at rest using AES-256 standards.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-fuchsia-400/30 transition-all">
                <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Control</h3>
                <p className="text-white/70">Multi-factor authentication and role-based access control for all systems.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                <p className="text-white/70">24/7 security monitoring with real-time threat detection and response.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Backup & Recovery</h3>
                <p className="text-white/70">Automated backup systems with disaster recovery capabilities and 99.9% uptime guarantee.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-white/70">SOC 2 Type II, ISO 27001, and GDPR compliance with regular security audits.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-400/30 transition-all">
                <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
                <p className="text-white/70">Rapid incident response team with automated threat intelligence and mitigation.</p>
              </div>
            </div>
          </section>

          {/* Security Practices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Practices</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Infrastructure Security</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Secure cloud infrastructure with private networks</li>
                  <li>• Regular security patches and updates</li>
                  <li>• Intrusion detection and prevention systems</li>
                  <li>• DDoS protection and mitigation</li>
                  <li>• Secure API endpoints with rate limiting</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Data Protection</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Data encryption at rest and in transit</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure data backup and recovery procedures</li>
                  <li>• Data retention and deletion policies</li>
                  <li>• Privacy by design principles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Certifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
                <p className="text-white/70">Service Organization Control 2 compliance for security, availability, and confidentiality.</p>
              </div>
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">ISO 27001</h3>
                <p className="text-white/70">International standard for information security management systems.</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">GDPR</h3>
                <p className="text-white/70">General Data Protection Regulation compliance for EU data protection.</p>
              </div>
            </div>
          </section>

          {/* Contact Security Team */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">Report Security Issues</h2>
              <p className="text-white/80 mb-6">
                If you discover a security vulnerability or have security concerns, please report them immediately to our security team.
              </p>
              <div className="space-y-2 text-white/70">
                <p>Email: security@zion.tech</p>
                <p>Security Hotline: +1-800-ZION-SEC</p>
                <p>Response Time: Within 24 hours</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-lg transition-colors mr-4">
              Contact Security Team
            </Link>
            <Link href="/privacy" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-colors">
              Privacy Policy
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}