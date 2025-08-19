import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's security measures, data protection, and compliance standards for autonomous technology solutions." />
        <meta property="og:title" content="Security | Zion Tech Group" />
        <meta property="og:description" content="Security measures and data protection for our autonomous technology solutions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
              ← Back to Home
            </Link>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Security & Compliance
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Protecting your data and ensuring the highest standards of security for autonomous technology solutions
              </p>
            </header>

            {/* Security Features */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Security Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 text-center">Zero-Trust Architecture</h3>
                  <p className="text-white/70 text-center">
                    Comprehensive security model that verifies every request and maintains strict access controls.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-fuchsia-400 text-center">Automated Threat Detection</h3>
                  <p className="text-white/70 text-center">
                    AI-powered security systems that continuously monitor and respond to potential threats.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🔐</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400 text-center">End-to-End Encryption</h3>
                  <p className="text-white/70 text-center">
                    Military-grade encryption protecting data in transit and at rest across all systems.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">Compliance Monitoring</h3>
                  <p className="text-white/70 text-center">
                    Automated compliance checking and reporting for industry standards and regulations.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🚨</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 text-center">Incident Response</h3>
                  <p className="text-white/70 text-center">
                    Rapid response protocols and automated recovery systems for security incidents.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Vulnerability Scanning</h3>
                  <p className="text-white/70 text-center">
                    Continuous security scanning and automated patching for identified vulnerabilities.
                  </p>
                </div>
              </div>
            </section>

            {/* Compliance Standards */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Compliance Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Data Protection</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• GDPR compliance for EU data subjects</li>
                    <li>• CCPA compliance for California residents</li>
                    <li>• SOC 2 Type II certification</li>
                    <li>• ISO 27001 information security</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-fuchsia-400/30">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-300">Industry Standards</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• HIPAA compliance for healthcare data</li>
                    <li>• PCI DSS for payment processing</li>
                    <li>• FedRAMP for government contracts</li>
                    <li>• NIST cybersecurity framework</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Metrics */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Security Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-400/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-white/80">Uptime</div>
                  <div className="text-sm text-green-300/80 mt-2">Security Ensured</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-400/30">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/80">Monitoring</div>
                  <div className="text-sm text-blue-300/80 mt-2">Threat Detection</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-400/30">
                  <div className="text-4xl font-bold text-purple-400 mb-2">&lt;1s</div>
                  <div className="text-white/80">Response Time</div>
                  <div className="text-sm text-purple-300/80 mt-2">Security Incidents</div>
                </div>
                
                <div className="text-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-white/80">Compliance</div>
                  <div className="text-sm text-cyan-300/80 mt-2">Standards Met</div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-6 text-white/90">Secure Your Technology Future</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Trust Zion Tech Group to protect your data and ensure the highest security standards for your autonomous technology solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                    Get Security Assessment
                  </Link>
                  <Link href="/services" className="border border-white/30 hover:border-cyan-400/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl">
                    Learn More
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}