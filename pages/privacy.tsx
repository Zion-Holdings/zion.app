import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, CheckCircle, 
  ArrowRight, Users, Globe, Database, 
  Calendar, Phone, Mail, MapPin,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const Privacy: React.FC = () => {
  const privacyPrinciples = [
    {
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Control',
      description: 'You have full control over your personal information',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Security',
      description: 'We implement robust security measures to protect your data',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Compliance',
      description: 'We adhere to all applicable privacy laws and regulations',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email, phone number', 'Company and job title', 'Contact preferences'],
      purpose: 'To provide services and communicate with you',
      retention: 'As long as you are a customer, plus 7 years for legal compliance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, device information', 'Browser type and version', 'Usage analytics'],
      purpose: 'To improve our services and ensure security',
      retention: '12 months for analytics, 90 days for security logs'
    },
    {
      category: 'Service Data',
      examples: ['Service usage patterns', 'Performance metrics', 'Support interactions'],
      purpose: 'To optimize service delivery and provide support',
      retention: 'Duration of service plus 3 years for business records'
    },
    {
      category: 'Marketing Data',
      examples: ['Marketing preferences', 'Campaign interactions', 'Event attendance'],
      purpose: 'To provide relevant marketing communications',
      retention: 'Until you opt out or 3 years of inactivity'
    }
  ];

  const yourRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data',
      icon: <Eye className="w-5 h-5" />
    },
    {
      right: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const dataProtection = [
    {
      measure: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols',
      details: ['AES-256 encryption', 'TLS 1.3 for data transmission', 'Encrypted database storage']
    },
    {
      measure: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms',
      details: ['Multi-factor authentication', 'Role-based access control', 'Regular access reviews']
    },
    {
      measure: 'Data Minimization',
      description: 'We only collect data that is necessary for our services',
      details: ['Purpose-limited collection', 'Regular data audits', 'Automatic data cleanup']
    },
    {
      measure: 'Third-Party Security',
      description: 'Careful vetting of third-party service providers',
      details: ['Security assessments', 'Data processing agreements', 'Regular compliance audits']
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'GDPR',
      region: 'European Union',
      status: 'Fully Compliant',
      description: 'General Data Protection Regulation compliance for EU residents'
    },
    {
      framework: 'CCPA',
      region: 'California, USA',
      status: 'Fully Compliant',
      description: 'California Consumer Privacy Act compliance'
    },
    {
      framework: 'SOC 2 Type II',
      region: 'Global',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls'
    },
    {
      framework: 'ISO 27001',
      region: 'Global',
      status: 'Certified',
      description: 'Information security management system'
    }
  ];

  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to protecting your privacy and personal data. Read our comprehensive privacy policy."
      keywords="privacy policy, data protection, GDPR, CCPA, personal data, Zion Tech Group"
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
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Your privacy is our priority
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                This Privacy Policy explains how Zion Tech Group collects, uses, and protects your personal information. 
                We are committed to transparency and giving you control over your data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Last Updated: December 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
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
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Four core principles guide our approach to data protection and privacy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-300 text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data We Collect */}
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
                Data We Collect
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Examples:</div>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-1">Purpose:</div>
                    <p className="text-gray-300 text-sm">{category.purpose}</p>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Retention:</div>
                    <p className="text-gray-300 text-sm">{category.retention}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
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
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                You have comprehensive rights regarding your personal data
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yourRights.map((right, index) => (
                <motion.div
                  key={right.right}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                      {right.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{right.right}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Measures */}
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
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple layers of security and protection measures safeguard your information
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataProtection.map((measure, index) => (
                <motion.div
                  key={measure.measure}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{measure.measure}</h3>
                  <p className="text-gray-300 mb-4">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
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
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We maintain the highest standards of data protection and privacy compliance
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.framework}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{framework.framework}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                      {framework.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-gray-400 text-sm">Region:</div>
                    <div className="text-white font-semibold">{framework.region}</div>
                  </div>
                  <p className="text-gray-300 text-sm">{framework.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
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
                Contact Our Privacy Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Have questions about your privacy or want to exercise your rights? We're here to help.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  privacy@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p className="text-purple-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
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
                Ready to Exercise Your Rights?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Contact us to access, modify, or delete your personal data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Privacy Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Privacy;

 