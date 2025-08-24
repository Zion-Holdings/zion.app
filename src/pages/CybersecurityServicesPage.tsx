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
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Protect your digital assets with enterprise-grade cybersecurity solutions. 
            From proactive security assessments to rapid incident response, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Security Assessment
            </a>
            <a href="/contact" className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Emergency Response
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            <strong>24/7 Emergency Support:</strong> +1 302 464 0950 | 
            <strong>Email:</strong> kleber@ziontechgroup.com | 
            <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </div>

      {/* Modern Security Threats Overview */}
      <section className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate mb-4">
              Modern Security Threats Require Modern Solutions
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              The cybersecurity landscape is constantly evolving. Our team stays ahead of emerging threats 
              to provide you with the most effective protection strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Ransomware Attacks</h3>
              <p className="text-zion-slate-light">
                Sophisticated ransomware targeting critical business data with encryption and extortion demands.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Data Breaches</h3>
              <p className="text-zion-slate-light">
                Unauthorized access to sensitive information, customer data, and intellectual property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Social Engineering</h3>
              <p className="text-zion-slate-light">
                Manipulation of human psychology to gain access to systems and sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              From proactive security measures to rapid incident response, we provide end-to-end cybersecurity protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Penetration Testing</h3>
              <p className="text-zion-slate-light mb-4">
                Comprehensive security assessments including web applications, mobile apps, network infrastructure, and social engineering.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Web Application Testing
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Mobile App Security
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Network Infrastructure
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-slate/10">
                <span className="text-2xl font-bold text-zion-blue">$5,999</span>
                <span className="text-zion-slate-light ml-2">starting</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Incident Response</h3>
              <p className="text-zion-slate-light mb-4">
                24/7 incident response team with digital forensics capabilities and rapid recovery services.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  24/7 Emergency Support
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Digital Forensics
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Rapid Recovery
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-slate/10">
                <span className="text-2xl font-bold text-zion-purple">$7,999</span>
                <span className="text-zion-slate-light ml-2">starting</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Security Consulting</h3>
              <p className="text-zion-slate-light mb-4">
                Strategic security planning, policy development, and compliance guidance for your organization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Security Strategy
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Policy Development
                </div>
                <div className="flex items-center text-sm text-zion-slate-light">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                  Compliance Guidance
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-slate/10">
                <span className="text-2xl font-bold text-zion-cyan">$3,999</span>
                <span className="text-zion-slate-light ml-2">starting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Framework & Standards */}
      <section className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate mb-4">
              Industry Standards & Compliance
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our security practices align with industry best practices and regulatory requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-blue">SOC 2</span>
              </div>
              <h3 className="font-semibold text-zion-slate">SOC 2 Type II</h3>
              <p className="text-sm text-zion-slate-light mt-2">Security, Availability, Processing Integrity</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-purple">ISO</span>
              </div>
              <h3 className="font-semibold text-zion-slate">ISO 27001</h3>
              <p className="text-sm text-zion-slate-light mt-2">Information Security Management</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-cyan">PCI</span>
              </div>
              <h3 className="font-semibold text-zion-slate">PCI DSS</h3>
              <p className="text-sm text-zion-slate-light mt-2">Payment Card Industry Standards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border border-zion-slate/10">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-blue">NIST</span>
              </div>
              <h3 className="font-semibold text-zion-slate">NIST CSF</h3>
              <p className="text-sm text-zion-slate-light mt-2">Cybersecurity Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate mb-4">
              Our Security Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              A systematic approach to identifying, assessing, and mitigating security risks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Assessment</h3>
              <p className="text-zion-slate-light">
                Comprehensive security evaluation and vulnerability assessment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Analysis</h3>
              <p className="text-zion-slate-light">
                Detailed risk analysis and threat modeling
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Remediation</h3>
              <p className="text-zion-slate-light">
                Strategic security improvements and vulnerability fixes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-3">Monitoring</h3>
              <p className="text-zion-slate-light">
                Ongoing security monitoring and incident response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Tools & Technologies */}
      <section className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate mb-4">
              Advanced Security Tools & Technologies
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We leverage cutting-edge tools and technologies to provide comprehensive security protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <h3 className="text-xl font-semibold text-zion-slate mb-4">Penetration Testing Tools</h3>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Metasploit Framework</li>
                <li>• Burp Suite Professional</li>
                <li>• Nmap & Wireshark</li>
                <li>• Custom Exploitation Tools</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <h3 className="text-xl font-semibold text-zion-slate mb-4">Security Monitoring</h3>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• SIEM Solutions</li>
                <li>• Intrusion Detection Systems</li>
                <li>• Endpoint Detection & Response</li>
                <li>• Threat Intelligence Platforms</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-zion-slate/10">
              <h3 className="text-xl font-semibold text-zion-slate mb-4">Forensics & Analysis</h3>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• EnCase & FTK</li>
                <li>• Volatility Framework</li>
                <li>• Memory Analysis Tools</li>
                <li>• Network Forensics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact us today for a comprehensive security assessment 
            and protect your digital assets from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Security Assessment
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3 rounded-lg font-semibold transition-colors">
              Emergency Response
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-zion-slate-light">
              <strong>24/7 Emergency Hotline:</strong> +1 302 464 0950
            </p>
            <p className="text-zion-slate-light">
              <strong>Email:</strong> kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}