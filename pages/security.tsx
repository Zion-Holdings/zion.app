import React from 'react';
import Head from 'next/head';

export default function Security() {
  return (
    <>
      <Head>
        <title>Security — Zion Tech Group</title>
        <meta name="description" content="Comprehensive security information and practices for Zion Tech Group's autonomous systems and services." />
        <meta property="og:title" content="Security — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive security information and practices for Zion Tech Group's autonomous systems and services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Security
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Protecting your data and systems with enterprise-grade security measures and autonomous threat detection.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            {/* Security Overview */}
            <section className="mb-16 p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl border border-green-500/20">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Security Overview</h2>
              <p className="text-white/80 mb-6">
                At Zion Tech Group, security is at the core of everything we do. Our autonomous systems are built with 
                security-first principles, implementing multiple layers of protection to ensure your data and infrastructure 
                remain secure at all times.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔒</div>
                  <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
                  <p className="text-white/70 text-sm">All data is encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🛡️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-white/70 text-sm">Continuous autonomous threat detection</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
                  <p className="text-white/70 text-sm">Meets industry security standards</p>
                </div>
              </div>
            </section>

            {/* Security Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Security Features</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Authentication & Access Control */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Authentication & Access Control</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Multi-factor authentication (MFA) support
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Role-based access control (RBAC)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Single sign-on (SSO) integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Session management and timeout controls
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      API key management and rotation
                    </li>
                  </ul>
                </div>

                {/* Data Protection */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Data Protection</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      AES-256 encryption for data at rest
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      TLS 1.3 for data in transit
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Automatic data backup and recovery
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Data anonymization and pseudonymization
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Secure data deletion and retention policies
                    </li>
                  </ul>
                </div>

                {/* Network Security */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Network Security</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      DDoS protection and mitigation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Web application firewall (WAF)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Intrusion detection and prevention
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Network segmentation and isolation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      VPN and secure remote access
                    </li>
                  </ul>
                </div>

                {/* Monitoring & Incident Response */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Monitoring & Incident Response</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      24/7 autonomous security monitoring
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Real-time threat intelligence feeds
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Automated incident response workflows
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Security event logging and analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Incident escalation and notification
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance & Certifications */}
            <section className="mb-16 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Compliance & Certifications</h2>
              <p className="text-white/80 mb-6">
                Our security practices align with industry standards and regulatory requirements to ensure your data 
                protection needs are met across various compliance frameworks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type II</h3>
                  <p className="text-white/70 text-sm">Service Organization Control compliance</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">GDPR</h3>
                  <p className="text-white/70 text-sm">General Data Protection Regulation</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="text-lg font-semibold text-white mb-2">HIPAA</h3>
                  <p className="text-white/70 text-sm">Healthcare data protection standards</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">💳</div>
                  <h3 className="text-lg font-semibold text-white mb-2">PCI DSS</h3>
                  <p className="text-white/70 text-sm">Payment card industry standards</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">🏛️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">FedRAMP</h3>
                  <p className="text-white/70 text-sm">Federal risk and authorization</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white mb-2">ISO 27001</h3>
                  <p className="text-white/70 text-sm">Information security management</p>
                </div>
              </div>
            </section>

            {/* Security Practices */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">Security Practices</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Development Security */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Secure Development</h3>
                  <p className="text-white/80 mb-4">
                    Our development process follows security-first principles with automated security testing and code analysis.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Static application security testing (SAST)</li>
                    <li>• Dynamic application security testing (DAST)</li>
                    <li>• Dependency vulnerability scanning</li>
                    <li>• Secure code review processes</li>
                    <li>• Automated security testing in CI/CD</li>
                  </ul>
                </div>

                {/* Employee Security */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Employee Security</h3>
                  <p className="text-white/80 mb-4">
                    Our team undergoes regular security training and background checks to maintain the highest security standards.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Background checks for all employees</li>
                    <li>• Regular security awareness training</li>
                    <li>• Non-disclosure agreements (NDAs)</li>
                    <li>• Principle of least privilege access</li>
                    <li>• Security incident reporting procedures</li>
                  </ul>
                </div>

                {/* Third-Party Security */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Third-Party Security</h3>
                  <p className="text-white/80 mb-4">
                    We maintain strict security standards for all third-party vendors and service providers.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Vendor security assessments</li>
                    <li>• Service level agreements (SLAs)</li>
                    <li>• Regular security audits</li>
                    <li>• Incident response coordination</li>
                    <li>• Data processing agreements</li>
                  </ul>
                </div>

                {/* Business Continuity */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-white">Business Continuity</h3>
                  <p className="text-white/80 mb-4">
                    Our disaster recovery and business continuity plans ensure service availability even during security incidents.
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li>• Disaster recovery planning</li>
                    <li>• Business continuity procedures</li>
                    <li>• Regular backup testing</li>
                    <li>• Incident response playbooks</li>
                    <li>• Recovery time objectives (RTO)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Dashboard */}
            <section className="mb-16 p-8 bg-slate-900 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Live Security Status</h2>
              <p className="text-white/80 mb-6">
                Real-time security metrics and system health indicators from our autonomous monitoring systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-white/80 text-sm">Uptime</div>
                </div>
                <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">0</div>
                  <div className="text-white/80 text-sm">Active Threats</div>
                </div>
                <div className="text-center p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-white/80 text-sm">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-white/80 text-sm">Encrypted</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a href="/reports/performance-metrics" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View detailed security metrics →
                </a>
              </div>
            </section>

            {/* Security Resources */}
            <section className="mb-16 p-8 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Security Resources</h2>
              <p className="text-white/80 mb-6">
                Access our security documentation, best practices, and incident response procedures.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Security Documentation</h3>
                  <ul className="space-y-2 text-white/80">
                    <li><a href="/api-documentation" className="text-cyan-400 hover:text-cyan-300">API Security Guide</a></li>
                    <li><a href="/reports" className="text-cyan-400 hover:text-cyan-300">Security Reports</a></li>
                    <li><a href="/automation" className="text-cyan-400 hover:text-cyan-300">Automation Security</a></li>
                  </ul>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">Incident Response</h3>
                  <ul className="space-y-2 text-white/80">
                    <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Report Security Issue</a></li>
                    <li><a href="/reports/automation-overview-2025" className="text-cyan-400 hover:text-cyan-300">Security Status</a></li>
                    <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Emergency Contact</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Security Team */}
            <section className="p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Report Security Issues</h2>
              <p className="text-white/80 mb-6">
                If you've discovered a security vulnerability or have security concerns, please report them immediately. 
                Our security team is available 24/7 to respond to security incidents.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
                  Report Security Issue
                </a>
                <a href="mailto:security@zion.tech" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  Email Security Team
                </a>
                <a href="/reports" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors">
                  View Security Status
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-slate-900 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Contact</h3>
                <p className="text-white/80 text-sm">
                  For critical security incidents requiring immediate attention, contact our 24/7 security hotline: 
                  <span className="text-red-400 font-mono ml-2">+1-800-SECURITY</span>
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}