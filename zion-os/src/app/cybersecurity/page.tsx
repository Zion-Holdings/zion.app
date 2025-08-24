import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Services - Zion Tech Group | Advanced Threat Protection",
  description: "Protect your organization with Zion Tech Group's comprehensive cybersecurity solutions. From threat detection to compliance management, we secure your digital assets.",
  keywords: "cybersecurity, threat protection, security services, compliance, Zion Tech Group, security solutions, threat detection",
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Cybersecurity Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your organization from evolving cyber threats with our comprehensive 
            security solutions. From threat detection to compliance management, 
            we secure your digital assets and ensure business continuity.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive Security for the Digital Age
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  In today's interconnected world, cybersecurity is not just a technical 
                  requirement—it's a business imperative. Our multi-layered security 
                  approach protects your organization from sophisticated threats while 
                  ensuring compliance with industry standards.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">24/7 threat monitoring & detection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">AI-powered security analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Compliance & regulatory support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Incident response & recovery</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  Secure Your Organization
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed for enterprise protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Threat Detection & Response */}
            <div className="card group hover:bg-green-500/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Detection & Response</h3>
              <p className="text-gray-400 mb-4">
                Advanced threat detection using AI and machine learning with 
                rapid incident response capabilities.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• AI-powered threat detection</li>
                <li>• Real-time monitoring</li>
                <li>• Incident response automation</li>
                <li>• Threat intelligence feeds</li>
              </ul>
              <Link href="/cybersecurity/threat-detection" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Security Assessment */}
            <div className="card group hover:bg-blue-500/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Assessment</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive security assessments including penetration testing, 
                vulnerability scanning, and risk analysis.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Penetration testing</li>
                <li>• Vulnerability assessments</li>
                <li>• Security architecture review</li>
                <li>• Risk analysis & reporting</li>
              </ul>
              <Link href="/cybersecurity/security-assessment" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Compliance Management */}
            <div className="card group hover:bg-purple-500/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Management</h3>
              <p className="text-gray-400 mb-4">
                Ensure compliance with industry standards including SOC2, ISO 27001, 
                GDPR, and industry-specific regulations.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• SOC2 compliance</li>
                <li>• ISO 27001 certification</li>
                <li>• GDPR compliance</li>
                <li>• Industry regulations</li>
              </ul>
              <Link href="/cybersecurity/compliance" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Identity & Access Management */}
            <div className="card group hover:bg-indigo-500/10 transition-colors">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Identity & Access Management</h3>
              <p className="text-gray-400 mb-4">
                Secure identity management with multi-factor authentication, 
                single sign-on, and privileged access management.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Multi-factor authentication</li>
                <li>• Single sign-on (SSO)</li>
                <li>• Privileged access management</li>
                <li>• Identity governance</li>
              </ul>
              <Link href="/cybersecurity/identity-access" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Data Protection */}
            <div className="card group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive data protection including encryption, backup, 
                and disaster recovery solutions.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Data encryption</li>
                <li>• Backup & recovery</li>
                <li>• Data loss prevention</li>
                <li>• Privacy protection</li>
              </ul>
              <Link href="/cybersecurity/data-protection" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Security Training */}
            <div className="card group hover:bg-yellow-500/10 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Training</h3>
              <p className="text-gray-400 mb-4">
                Employee security awareness training and phishing simulation 
                to build a security-conscious culture.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Security awareness training</li>
                <li>• Phishing simulations</li>
                <li>• Incident response training</li>
                <li>• Compliance training</li>
              </ul>
              <Link href="/cybersecurity/security-training" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Framework
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive security approach based on industry best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Identify</h3>
              <p className="text-gray-400">
                Asset discovery, risk assessment, and threat intelligence 
                to understand your security posture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Protect</h3>
              <p className="text-gray-400">
                Implement security controls, access management, and 
                data protection measures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Detect</h3>
              <p className="text-gray-400">
                Continuous monitoring, threat detection, and 
                security event analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Respond</h3>
              <p className="text-gray-400">
                Incident response, containment, and recovery 
                to minimize business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-recognized security and compliance frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SOC2 Type II</h3>
              <p className="text-gray-400 mb-4">
                Service Organization Control 2 certification demonstrating 
                security, availability, and processing integrity.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Coverage:</strong> Security, Availability, Processing Integrity
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">ISO 27001</h3>
              <p className="text-gray-400 mb-4">
                International standard for information security management 
                systems (ISMS) certification.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Coverage:</strong> Information Security Management
              </div>
            </div>
            
            <div className="card">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">GDPR Compliance</h3>
              <p className="text-gray-400 mb-4">
                General Data Protection Regulation compliance for 
                organizations handling EU citizen data.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Coverage:</strong> Data Privacy & Protection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-leading security tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <h3 className="text-lg font-semibold mb-4">SIEM & Monitoring</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Splunk</div>
                <div>IBM QRadar</div>
                <div>Microsoft Sentinel</div>
                <div>ELK Stack</div>
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold mb-4">Endpoint Protection</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>CrowdStrike</div>
                <div>Carbon Black</div>
                <div>SentinelOne</div>
                <div>Microsoft Defender</div>
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold mb-4">Network Security</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Palo Alto Networks</div>
                <div>Cisco</div>
                <div>Fortinet</div>
                <div>Check Point</div>
              </div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold mb-4">Identity & Access</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Okta</div>
                <div>Auth0</div>
                <div>Microsoft Azure AD</div>
                <div>CyberArk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Success Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable improvements in security posture and threat response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Threat detection rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">90%</div>
              <div className="text-gray-400">Reduction in incident response time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400">Compliance achievement rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Security monitoring coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your digital assets with comprehensive cybersecurity solutions. 
              Let's discuss how we can strengthen your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Secure Your Organization
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Security Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}