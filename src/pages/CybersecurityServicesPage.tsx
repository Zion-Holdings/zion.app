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
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600">Meet SOC 2, ISO 27001, PCI DSS, and other compliance requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Continuity</h3>
                <p className="text-gray-600">Ensure your operations continue even during security incidents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from modern cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Penetration Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security testing to identify vulnerabilities in your systems, applications, and networks.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Web Application Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Network Infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Social Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Physical Security</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-red-600 mb-4">Starting at $5,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Penetration Testing Inquiry"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Security Audits */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Audits</h3>
              <p className="text-gray-600 mb-4">
                Thorough assessment of your security posture, policies, and procedures to ensure compliance and best practices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Policy Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Compliance Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Risk Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Gap Analysis</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-4">Starting at $3,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Security Audit Inquiry"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Incident Response */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Rapid response and recovery services when security incidents occur, minimizing damage and downtime.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">24/7 Emergency Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Forensic Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Recovery Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Post-Incident Review</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-4">Starting at $7,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Incident Response Inquiry"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Threat Intelligence */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Proactive threat monitoring and intelligence gathering to stay ahead of emerging cyber threats.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Threat Monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Vulnerability Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Risk Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Security Alerts</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-4">Starting at $2,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Threat Intelligence Inquiry"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Security Training */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Training</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security awareness training for your employees to build a security-conscious culture.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Phishing Awareness</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Password Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Social Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Incident Reporting</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-yellow-600 mb-4">Starting at $1,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Security Training Inquiry"
                className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Compliance Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Services</h3>
              <p className="text-gray-600 mb-4">
                Help you achieve and maintain compliance with industry standards and regulatory requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">SOC 2 Type II</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">ISO 27001</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">PCI DSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">GDPR Compliance</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600 mb-4">Starting at $4,999</div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Compliance Services Inquiry"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Standards & Compliance</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our security practices align with industry best practices and regulatory requirements
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">SOC 2</span>
                </div>
                <p className="text-gray-600">Service Organization Control</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">ISO</span>
                </div>
                <p className="text-gray-600">27001 Information Security</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">PCI</span>
                </div>
                <p className="text-gray-600">DSS Payment Security</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">NIST</span>
                </div>
                <p className="text-gray-600">Cybersecurity Framework</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Security Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to securing your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">Comprehensive evaluation of your current security posture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Develop customized security strategy and roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">Execute security measures and controls</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                <p className="text-gray-600">Continuous monitoring and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Security Tools & Technologies</h2>
            <p className="text-xl text-gray-600 mb-8">
              We leverage cutting-edge tools and technologies to provide comprehensive security solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Vulnerability Scanners</h4>
                <p className="text-sm text-gray-600">Nessus, Qualys, OpenVAS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Penetration Testing</h4>
                <p className="text-sm text-gray-600">Metasploit, Burp Suite, Nmap</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">SIEM Solutions</h4>
                <p className="text-sm text-gray-600">Splunk, ELK Stack, QRadar</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Forensic Tools</h4>
                <p className="text-sm text-gray-600">EnCase, FTK, Autopsy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Contact us today for a comprehensive security assessment 
            and discover how we can protect your organization from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Consultation"
              className="bg-white text-red-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}