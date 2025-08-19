import React from 'react';
import Head from 'next/head';

export default function SecurityPage() {
  return (
    <>
      <Head>
        <title>Security — Zion Tech Group</title>
        <meta name="description" content="Security practices, certifications, and compliance information for Zion Tech Group." />
        <meta property="og:title" content="Security — Zion Tech Group" />
        <meta property="og:description" content="Security practices, certifications, and compliance information for Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Security & Compliance
              </h1>
              <p className="text-xl text-white/80">
                Enterprise-grade security for autonomous innovation
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">🔒 Data Protection</h3>
                <p className="text-white/80">
                  End-to-end encryption, secure data centers, and comprehensive backup systems ensure your data remains protected at all times.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">🛡️ Access Control</h3>
                <p className="text-white/80">
                  Multi-factor authentication, role-based access control, and continuous monitoring protect against unauthorized access.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-400">🔐 Compliance</h3>
                <p className="text-white/80">
                  SOC 2 Type II, ISO 27001, and GDPR compliance ensure we meet the highest security standards.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">🚨 Incident Response</h3>
                <p className="text-white/80">
                  24/7 security monitoring with automated threat detection and rapid response protocols.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Security Architecture</h2>
                <p className="text-white/80 mb-4">
                  Our security architecture is built on multiple layers of protection, from network security to application-level safeguards.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-fuchsia-400">Infrastructure Security</h4>
                  <ul className="list-disc list-inside text-white/80 ml-6">
                    <li>DDoS protection and mitigation</li>
                    <li>Network segmentation and isolation</li>
                    <li>Intrusion detection and prevention</li>
                    <li>Regular security audits and penetration testing</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-fuchsia-400">Data Security</h2>
                <p className="text-white/80 mb-4">
                  We implement industry-leading data security measures to protect sensitive information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Encryption</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>AES-256 encryption at rest</li>
                      <li>TLS 1.3 for data in transit</li>
                      <li>End-to-end encryption for communications</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Backup & Recovery</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Automated daily backups</li>
                      <li>Geographic redundancy</li>
                      <li>Point-in-time recovery</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Compliance & Certifications</h2>
                <p className="text-white/80 mb-4">
                  Our commitment to security is validated through rigorous third-party audits and certifications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <h4 className="font-semibold text-cyan-400">SOC 2 Type II</h4>
                    <p className="text-white/80 text-sm">Service Organization Control</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🌐</div>
                    <h4 className="font-semibold text-fuchsia-400">ISO 27001</h4>
                    <p className="text-white/80 text-sm">Information Security Management</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="font-semibold text-green-400">GDPR</h4>
                    <p className="text-white/80 text-sm">Data Protection Regulation</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Security Monitoring</h2>
                <p className="text-white/80 mb-4">
                  Continuous monitoring and automated threat detection ensure rapid response to security incidents.
                </p>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <ul className="list-disc list-inside text-white/80 ml-6">
                    <li>Real-time security event monitoring</li>
                    <li>Automated threat intelligence feeds</li>
                    <li>Behavioral analysis and anomaly detection</li>
                    <li>24/7 security operations center</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Security Best Practices</h2>
                <p className="text-white/80 mb-4">
                  We follow industry best practices and continuously improve our security posture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-purple-400">Development Security</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Secure coding practices</li>
                      <li>Regular security code reviews</li>
                      <li>Automated vulnerability scanning</li>
                      <li>Dependency vulnerability management</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Incident Response</h4>
                    <ul className="list-disc list-inside text-white/80 ml-6 text-sm">
                      <li>Documented response procedures</li>
                      <li>Regular incident response drills</li>
                      <li>Customer notification protocols</li>
                      <li>Post-incident analysis and lessons learned</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Security Team</h2>
                <p className="text-white/80 mb-4">
                  For security-related inquiries or to report security concerns, please contact our dedicated security team.
                </p>
                <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Security Contacts</h4>
                      <p className="text-white/90">
                        <strong>Security Team:</strong> security@zion.tech<br />
                        <strong>Emergency:</strong> +1 (555) 123-4567<br />
                        <strong>PGP Key:</strong> Available upon request
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">Reporting Security Issues</h4>
                      <p className="text-white/90">
                        We encourage responsible disclosure of security vulnerabilities. Please report any issues to our security team for immediate attention.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="text-center mt-12">
              <a href="/" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Return to Homepage
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}