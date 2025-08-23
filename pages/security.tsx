import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, CheckCircle, AlertTriangle, 
  ArrowRight, Server, Database, Network, Key,
  Users, Globe, Zap, Brain, Phone, Cloud
} from 'lucide-react';
import Link from 'next/link';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Multi-Layer Security',
      description: 'Comprehensive security architecture with multiple defense layers',
      features: ['Network security', 'Application security', 'Data encryption', 'Access controls']
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection measures',
      features: ['End-to-end encryption', 'Data masking', 'Secure backups', 'Privacy compliance']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection',
      features: ['Real-time alerts', 'Threat intelligence', 'Incident response', 'Security analytics']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Access Management',
      description: 'Robust identity and access management systems',
      features: ['Multi-factor authentication', 'Role-based access', 'Single sign-on', 'Privilege management']
    }
  ];

  const securityCertifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance with Type II attestation',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      status: 'Certified',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const securityTechnologies = [
    {
      name: 'Quantum Encryption',
      description: 'Next-generation quantum-resistant encryption algorithms',
      icon: <Key className="w-6 h-6" />
    },
    {
      name: 'AI Threat Detection',
      description: 'Machine learning-powered security threat detection',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model',
      icon: <Network className="w-6 h-6" />
    },
    {
      name: 'Secure Cloud Infrastructure',
      description: 'Enterprise-grade cloud security and compliance',
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const securityIncidents = [
    {
      year: '2024',
      incidents: 0,
      description: 'Zero security breaches or data compromises',
      status: 'Excellent'
    },
    {
      year: '2023',
      incidents: 0,
      description: 'Zero security breaches or data compromises',
      status: 'Excellent'
    },
    {
      year: '2022',
      incidents: 0,
      description: 'Zero security breaches or data compromises',
      status: 'Excellent'
    }
  ];

  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy."
      keywords="security, cybersecurity, data protection, SOC 2, ISO 27001, GDPR compliance, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Security
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Enterprise-grade security protecting your data and privacy
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, security is not just a feature—it's fundamental to everything we do. 
                We employ industry-leading security measures to protect your data and ensure your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Commitment */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Our Security Commitment
              </h2>
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20">
                <p className="text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl mx-auto">
                  "We are committed to maintaining the highest standards of security and data protection. 
                  Our multi-layered security approach ensures that your information remains secure, 
                  confidential, and protected against evolving cyber threats."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security measures that protect your data at every level
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item) => (
                      <li key={item} className="text-sm text-gray-300 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Certifications */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Certifications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-recognized certifications demonstrating our security commitment
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityCertifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      {cert.icon}
                    </div>
                    <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Technologies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Advanced Security Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge security technologies protecting against modern threats
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Track Record */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Track Record
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our commitment to security is reflected in our track record
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityIncidents.map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">{year.incidents}</div>
                  <div className="text-lg text-white font-semibold mb-2">{year.year}</div>
                  <p className="text-gray-300 text-sm mb-3">{year.description}</p>
                  <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {year.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Best Practices
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                How we maintain the highest security standards
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Proactive Security</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Regular Security Audits</h4>
                      <p className="text-gray-300 text-sm">
                        Comprehensive security assessments and penetration testing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Threat Intelligence</h4>
                      <p className="text-gray-300 text-sm">
                        Continuous monitoring of emerging security threats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Security Training</h4>
                      <p className="text-gray-300 text-sm">
                        Regular security awareness training for all employees
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Incident Response</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">24/7 Monitoring</h4>
                      <p className="text-gray-300 text-sm">
                        Round-the-clock security operations center
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Rapid Response</h4>
                      <p className="text-gray-300 text-sm">
                        Immediate incident detection and response capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Recovery Planning</h4>
                      <p className="text-gray-300 text-sm">
                        Comprehensive disaster recovery and business continuity plans
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Inquiries
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions about our security measures? Our security team is here to help.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Security Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Security Inquiries</div>
                      <a href="mailto:security@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                        security@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Security Incidents</div>
                      <a href="mailto:security-incident@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                        security-incident@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Emergency Contact</div>
                      <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">General Inquiries</span>
                    <span className="text-blue-400 font-semibold">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Security Questions</span>
                    <span className="text-blue-400 font-semibold">4 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Security Incidents</span>
                    <span className="text-blue-400 font-semibold">1 hour</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Emergency Response</span>
                    <span className="text-blue-400 font-semibold">15 minutes</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Trust in Our Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Your security is our priority. Learn more about how we protect your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:security@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Security Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  href="/privacy"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Security;

