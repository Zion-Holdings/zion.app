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

