import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, AlertTriangle, Zap, Globe, Users, CheckCircle } from 'lucide-react';

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity Services - Zion Tech Group" 
        description="Comprehensive cybersecurity solutions including penetration testing, incident response, and security consulting."
        keywords="cybersecurity, penetration testing, incident response, security audit, Zion Tech Group"
        canonical="https://ziontechgroup.com/cybersecurity-services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            Cybersecurity Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto">
            Protect your business with enterprise-grade cybersecurity solutions and expert security consulting
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span>Penetration Testing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Lock className="w-5 h-5" />
              <span>Security Audits</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Eye className="w-5 h-5" />
              <span>Incident Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <AlertTriangle className="w-5 h-5" />
              <span>Threat Intelligence</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Inquiry"
              className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Get Security Assessment
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-all duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://ziontechgroup.com" className="font-semibold hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Security Threats Require Modern Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">
              In today's interconnected world, cybersecurity is not just an IT concern—it's a business imperative. 
              Our comprehensive security services help protect your organization from evolving threats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rising Threats</h3>
                <p className="text-gray-600">Cyber attacks increased by 38% in 2023, targeting businesses of all sizes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">Average cost of a data breach reached $4.45 million in 2023</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human Factor</h3>
                <p className="text-gray-600">85% of breaches involve human error or social engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Cybersecurity Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Penetration Testing */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security testing to identify vulnerabilities before attackers do. 
                Includes web, mobile, and network penetration testing.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Web Application Testing</li>
                <li>• Mobile App Security</li>
                <li>• Network Infrastructure</li>
                <li>• Social Engineering</li>
              </ul>
              <div className="text-lg font-semibold text-red-600 mb-3">Starting at $2,500</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Penetration Testing Inquiry"
                className="block w-full bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Security Audits */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Audits</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security assessments to evaluate your organization's security posture 
                and compliance with industry standards.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Compliance Audits (SOC2, ISO27001)</li>
                <li>• Security Policy Review</li>
                <li>• Risk Assessment</li>
                <li>• Gap Analysis</li>
              </ul>
              <div className="text-lg font-semibold text-blue-600 mb-3">Starting at $3,500</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Security Audit Inquiry"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Incident Response */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 incident response services to help you contain, investigate, and recover 
                from security incidents quickly and effectively.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• 24/7 Emergency Response</li>
                <li>• Digital Forensics</li>
                <li>• Threat Containment</li>
                <li>• Recovery Planning</li>
              </ul>
              <div className="text-lg font-semibold text-purple-600 mb-3">Starting at $5,000</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Incident Response Inquiry"
                className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Threat Intelligence */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Proactive threat monitoring and intelligence gathering to stay ahead of emerging 
                cyber threats and protect your organization.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Threat Monitoring</li>
                <li>• Intelligence Reports</li>
                <li>• Vulnerability Tracking</li>
                <li>• Threat Hunting</li>
              </ul>
              <div className="text-lg font-semibold text-green-600 mb-3">Starting at $1,500/month</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Threat Intelligence Inquiry"
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Security Training */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Training</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security awareness training to educate your team on cybersecurity 
                best practices and threat recognition.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Phishing Awareness</li>
                <li>• Password Security</li>
                <li>• Social Engineering</li>
                <li>• Incident Reporting</li>
              </ul>
              <div className="text-lg font-semibold text-orange-600 mb-3">Starting at $2,000</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Security Training Inquiry"
                className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Compliance Consulting */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance to help your organization achieve and maintain compliance 
                with industry regulations and standards.
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• SOC2 Preparation</li>
                <li>• ISO27001 Implementation</li>
                <li>• GDPR Compliance</li>
                <li>• HIPAA Security</li>
              </ul>
              <div className="text-lg font-semibold text-indigo-600 mb-3">Starting at $4,000</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Compliance Consulting Inquiry"
                className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Industry Standards & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">SOC2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">SOC2 Type II</h3>
                <p className="text-gray-600 text-sm">Service Organization Control 2 compliance for data security</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">ISO</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">ISO27001</h3>
                <p className="text-gray-600 text-sm">Information security management system certification</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">GDPR</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">GDPR</h3>
                <p className="text-gray-600 text-sm">General Data Protection Regulation compliance</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">HIPAA</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">HIPAA</h3>
                <p className="text-gray-600 text-sm">Healthcare data security and privacy compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Security Process</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assess</h3>
                <p className="text-gray-600">Comprehensive security assessment and vulnerability analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Plan</h3>
                <p className="text-gray-600">Develop customized security strategy and implementation plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implement</h3>
                <p className="text-gray-600">Execute security measures and deploy protective solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitor</h3>
                <p className="text-gray-600">Continuous monitoring and ongoing security maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools & Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Advanced Security Tools & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Penetration Testing Tools</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Metasploit Framework</li>
                  <li>• Burp Suite Professional</li>
                  <li>• Nmap Network Scanner</li>
                  <li>• Wireshark Protocol Analyzer</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Security Monitoring</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• SIEM Solutions</li>
                  <li>• Endpoint Detection & Response</li>
                  <li>• Network Traffic Analysis</li>
                  <li>• Log Management Systems</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Compliance Tools</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Policy Management Systems</li>
                  <li>• Risk Assessment Tools</li>
                  <li>• Audit Trail Monitoring</li>
                  <li>• Compliance Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Contact our cybersecurity experts today for a comprehensive 
            security assessment and customized protection plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Consultation"
              className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}