import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, CheckCircle, AlertTriangle, Server, Globe } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: "Zero-Trust Architecture",
      description: "Implementing comprehensive zero-trust security principles across all systems",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Continuous verification", "Least privilege access", "Micro-segmentation", "Identity-based security"]
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Advanced encryption algorithms resistant to quantum computing attacks",
      icon: <Lock className="w-8 h-8" />,
      benefits: ["Post-quantum cryptography", "Future-proof security", "Advanced algorithms", "Compliance ready"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center with AI-powered threat detection",
      icon: <Eye className="w-8 h-6" />,
      benefits: ["Real-time monitoring", "AI threat detection", "Incident response", "Proactive defense"]
    },
    {
      title: "Compliance & Certifications",
      description: "Meeting and exceeding industry security standards and regulations",
      icon: <CheckCircle className="w-8 h-8" />,
      benefits: ["SOC 2 Type II", "ISO 27001", "GDPR compliance", "Industry standards"]
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
=======
import { Shield, Lock, Eye, Users, CheckCircle, AlertTriangle, Server, Globe } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: "Zero-Trust Architecture",
      description: "Implementing comprehensive zero-trust security principles across all systems",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Continuous verification", "Least privilege access", "Micro-segmentation", "Identity-based security"]
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Advanced encryption algorithms resistant to quantum computing attacks",
      icon: <Lock className="w-8 h-8" />,
      benefits: ["Post-quantum cryptography", "Future-proof security", "Advanced algorithms", "Compliance ready"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security operations center with AI-powered threat detection",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Real-time monitoring", "AI threat detection", "Incident response", "Proactive defense"]
    },
    {
      title: "Compliance & Certifications",
      description: "Meeting and exceeding industry security standards and regulations",
      icon: <CheckCircle className="w-8 h-8" />,
      benefits: ["SOC 2 Type II", "ISO 27001", "GDPR compliance", "Industry standards"]
    }
  ];

  const securityLayers = [
    {
      title: "Infrastructure Security",
      description: "Secure cloud infrastructure and data centers",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Application Security",
      description: "Secure coding practices and vulnerability management",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption and data privacy controls",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Access Control",
      description: "Multi-factor authentication and role-based access",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const complianceStandards = [
    {
      standard: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality",
      status: "Certified"
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security management systems",
      status: "Certified"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection",
      status: "Compliant"
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      status: "Compliant"
    }
  ];

  return (
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
=======
    <Layout 
      title="Security - Zion Tech Group"
      description="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and commitment to protecting your data and systems."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your security is our priority. We implement enterprise-grade security measures, 
                quantum-resistant encryption, and maintain the highest compliance standards to protect your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Security Features</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security measures designed to protect your data and systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Multi-Layer Security</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Defense in depth approach with multiple security layers protecting your assets
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {layer.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
                  <p className="text-gray-400">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Compliance & Certifications</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meeting and exceeding industry security standards and regulatory requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{standard.standard}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Commitment Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Security Commitment</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're committed to maintaining the highest security standards and protecting your trust
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Continuous Security Improvement</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We continuously monitor, assess, and improve our security posture to stay ahead of emerging threats. 
                  Our security team works around the clock to ensure your data and systems remain protected.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We regularly conduct security audits, penetration testing, and vulnerability assessments to identify 
                  and address potential security gaps before they can be exploited.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h4 className="text-xl font-semibold mb-4">Security Measures Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Regular security audits and assessments
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Penetration testing and vulnerability scanning
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Employee security training and awareness
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Incident response planning and testing
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Security Resources</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Access our security documentation, policies, and best practices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security Whitepaper",
                  description: "Comprehensive overview of our security architecture and practices",
                  link: "#"
                },
                {
                  title: "Compliance Reports",
                  description: "Latest compliance certifications and audit reports",
                  link: "#"
                },
                {
                  title: "Security FAQ",
                  description: "Common security questions and detailed answers",
                  link: "#"
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Questions About Our Security?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our security team is here to answer your questions and provide detailed information
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Security Team
                </a>
                <a
                  href="mailto:security@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Email Security Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SecurityPage;

