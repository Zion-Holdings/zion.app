import React from 'react';
import Head from 'next/head';
import { Shield, CheckCircle, FileText, Lock, Users, Globe, Award, TrendingUp } from 'lucide-react';

const CompliancePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Compliance & Governance - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group maintains comprehensive compliance with industry standards including SOC 2, GDPR, HIPAA, and more. Learn about our security and governance practices." />
        <meta name="keywords" content="compliance, SOC 2, GDPR, HIPAA, security, governance, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/compliance" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="mx-auto h-16 w-16 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Compliance & Governance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zion Tech Group maintains the highest standards of compliance and governance. 
              Our comprehensive security framework ensures your data and operations meet industry standards.
            </p>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Compliance Framework
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We maintain compliance with multiple industry standards and regulations, 
                providing you with confidence in our security and governance practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">SOC 2 Type II</h3>
                <p className="text-gray-300">
                  Service Organization Control 2 certification demonstrating our security, availability, 
                  processing integrity, confidentiality, and privacy controls.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Lock className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">GDPR Compliance</h3>
                <p className="text-gray-300">
                  Full compliance with General Data Protection Regulation ensuring data privacy 
                  and protection for EU citizens.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">HIPAA Compliance</h3>
                <p className="text-gray-300">
                  Health Insurance Portability and Accountability Act compliance for 
                  healthcare data protection and privacy.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Globe className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">ISO 27001</h3>
                <p className="text-gray-300">
                  International standard for information security management systems, 
                  ensuring comprehensive security controls.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <Award className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">PCI DSS</h3>
                <p className="text-gray-300">
                  Payment Card Industry Data Security Standard compliance for 
                  secure payment processing and cardholder data protection.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Continuous Monitoring</h3>
                <p className="text-gray-300">
                  Ongoing compliance monitoring and regular audits to ensure 
                  standards are maintained and improved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Controls */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Security Controls & Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Technical Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Multi-factor authentication (MFA)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">End-to-end encryption</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Regular security updates and patches</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Intrusion detection and prevention</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Vulnerability scanning and management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Secure development practices</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Administrative Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Security awareness training</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Background checks and screening</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Access control and management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Incident response procedures</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Business continuity planning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Regular policy reviews and updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Our Compliance Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Comprehensive evaluation of current controls and gaps</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">Deploy necessary controls and processes</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Testing</h3>
                <p className="text-gray-300">Validate controls through testing and audits</p>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring and improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Compliance Documentation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Available Documents</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• SOC 2 Type II Report</li>
                    <li>• Privacy Policy</li>
                    <li>• Data Processing Agreements</li>
                    <li>• Security Whitepaper</li>
                    <li>• Incident Response Plan</li>
                    <li>• Business Continuity Plan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Request Access</h3>
                  <p className="text-gray-300 mb-4">
                    For compliance documentation and audit support, please contact our compliance team.
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Email:</strong> compliance@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Compliance Support
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Need help with compliance requirements? Our team can assist with audits, 
              documentation, and implementation guidance.
            </p>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <FileText className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Services</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">For Clients</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Compliance readiness assessments</li>
                    <li>• Audit support and documentation</li>
                    <li>• Security control implementation</li>
                    <li>• Training and awareness programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">For Partners</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Joint compliance initiatives</li>
                    <li>• Shared security frameworks</li>
                    <li>• Cross-certification support</li>
                    <li>• Best practice sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;