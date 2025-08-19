import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security — Zion Tech Group</title>
        <meta name="description" content="Security practices, policies, and information about Zion Tech Group's commitment to protecting your data." />
        <meta property="og:title" content="Security — Zion Tech Group" />
        <meta property="og:description" content="Security practices, policies, and information about Zion Tech Group's commitment to protecting your data." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Security
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your security is our top priority. Learn about our comprehensive security measures and practices.
            </p>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Encryption</h3>
              <p className="text-white/70">All data is encrypted in transit and at rest using industry-standard AES-256 encryption.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-fuchsia-400/30 transition-all">
              <div className="text-fuchsia-400 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Access Control</h3>
              <p className="text-white/70">Multi-factor authentication and role-based access controls ensure secure system access.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all">
              <div className="text-purple-400 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Continuous Monitoring</h3>
              <p className="text-white/70">24/7 security monitoring and threat detection systems protect against potential attacks.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Regular Audits</h3>
              <p className="text-white/70">Comprehensive security audits and penetration testing conducted regularly.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all">
              <div className="text-green-400 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Secure Infrastructure</h3>
              <p className="text-white/70">Cloud infrastructure built with security-first principles and compliance standards.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all">
              <div className="text-blue-400 text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">Compliance</h3>
              <p className="text-white/70">Adherence to SOC 2, GDPR, and other industry security and privacy standards.</p>
            </div>
          </div>

          {/* Security Policies */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Security Policies
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Information Security Policy</h3>
                <p className="text-white/80">
                  Our comprehensive information security policy ensures the confidentiality, integrity, and availability of all data and systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3">Incident Response Plan</h3>
                <p className="text-white/80">
                  Rapid response procedures for security incidents with clear escalation paths and communication protocols.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Data Protection</h3>
                <p className="text-white/80">
                  Strict data handling procedures, retention policies, and secure disposal methods for sensitive information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Employee Training</h3>
                <p className="text-white/80">
                  Regular security awareness training for all employees to maintain a security-conscious culture.
                </p>
              </div>
            </div>
          </div>

          {/* Security Contact */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Report Security Issues</h2>
            <p className="text-white/70 mb-6">
              If you've discovered a security vulnerability, please report it to our security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Contact Security Team
              </Link>
              <a href="mailto:security@zion.tech" className="px-6 py-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-lg transition-colors">
                security@zion.tech
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}