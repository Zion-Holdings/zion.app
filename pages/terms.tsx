import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  ArrowRight, Users, Globe, Database, 
  Calendar, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';

const Terms: React.FC = () => {
  const keyTerms = [
    {
      title: 'Acceptance',
      description: 'By using our services, you agree to these terms and conditions',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Services',
      description: 'We provide AI consciousness and quantum computing technology services',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'User Obligations',
      description: 'Users must comply with applicable laws and our acceptable use policy',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Intellectual Property',
      description: 'Our technology and content remain our exclusive property',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const serviceTerms = [
    {
      service: 'AI Consciousness Platform',
      description: 'Advanced AI systems with consciousness capabilities',
      restrictions: [
        'No unauthorized access or reverse engineering',
        'Compliance with AI safety guidelines',
        'Proper data handling and privacy protection'
      ],
      usage: 'Commercial and research applications'
    },
    {
      service: 'Quantum Computing Solutions',
      description: 'Quantum computing infrastructure and algorithms',
      restrictions: [
        'No quantum algorithm theft or copying',
        'Respect for quantum security protocols',
        'Proper quantum error handling'
      ],
      usage: 'Scientific research and enterprise applications'
    },
    {
      service: 'Cybersecurity Services',
      description: 'Advanced security and threat protection',
      restrictions: [
        'No testing against unauthorized systems',
        'Compliance with security regulations',
        'Proper incident reporting procedures'
      ],
      usage: 'Enterprise security and compliance'
    },
    {
      service: 'Cloud Infrastructure',
      description: 'Scalable cloud computing resources',
      restrictions: [
        'No resource abuse or unauthorized access',
        'Compliance with cloud security policies',
        'Proper cost management and optimization'
      ],
      usage: 'Business applications and development'
    }
  ];

  const userObligations = [
    {
      obligation: 'Legal Compliance',
      description: 'Use services in accordance with all applicable laws and regulations',
      examples: [
        'Data protection and privacy laws',
        'Export control regulations',
        'Industry-specific compliance requirements'
      ]
    },
    {
      obligation: 'Security Practices',
      description: 'Implement appropriate security measures to protect your data and systems',
      examples: [
        'Strong authentication and access controls',
        'Regular security updates and patches',
        'Incident response and recovery procedures'
      ]
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use services only for lawful and appropriate purposes',
      examples: [
        'No malicious or harmful activities',
        'Respect for intellectual property rights',
        'Professional and ethical conduct'
      ]
    },
    {
      obligation: 'Data Responsibility',
      description: 'Take responsibility for data you input and process through our services',
      examples: [
        'Data accuracy and quality assurance',
        'Appropriate data retention policies',
        'Compliance with data protection requirements'
      ]
    }
  ];

  const paymentTerms = [
    {
      term: 'Service Fees',
      description: 'Fees are charged based on service usage and subscription plans',
      details: [
        'Monthly or annual subscription fees',
        'Usage-based pricing for certain services',
        'Additional fees for premium features'
      ]
    },
    {
      term: 'Payment Methods',
      description: 'We accept various payment methods for your convenience',
      details: [
        'Credit and debit cards',
        'Bank transfers and wire payments',
        'Digital payment platforms'
      ]
    },
    {
      term: 'Billing Cycle',
      description: 'Billing occurs on a regular schedule based on your plan',
      details: [
        'Monthly billing for monthly plans',
        'Annual billing for annual plans',
        'Pro-rated billing for plan changes'
      ]
    },
    {
      term: 'Late Payments',
      description: 'Late payments may result in service suspension or additional fees',
      details: [
        'Grace period for late payments',
        'Service suspension after extended non-payment',
        'Reactivation fees for suspended accounts'
      ]
    }
  ];

  const liabilityLimitations = [
    {
      limitation: 'Service Availability',
      description: 'We strive for high availability but cannot guarantee 100% uptime',
      details: 'Scheduled maintenance and unforeseen outages may occur'
    },
    {
      limitation: 'Data Loss',
      description: 'We implement backup and recovery measures but cannot guarantee against all data loss',
      details: 'Users are responsible for maintaining their own data backups'
    },
    {
      limitation: 'Third-Party Services',
      description: 'We are not responsible for third-party services integrated with our platform',
      details: 'Third-party terms and conditions apply to their services'
    },
    {
      limitation: 'Force Majeure',
      description: 'We are not liable for service interruptions due to circumstances beyond our control',
      details: 'Natural disasters, government actions, and other extraordinary events'
    }
  ];

  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's terms of service and understand the conditions for using our AI consciousness and quantum computing services."
      keywords="terms of service, terms and conditions, service agreement, Zion Tech Group, AI services, quantum computing"
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
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Terms of Service
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Understanding our service agreement
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                These Terms of Service govern your use of Zion Tech Group's AI consciousness, 
                quantum computing, and technology services. Please read them carefully.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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

        {/* Key Terms */}
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
                Key Terms Overview
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Essential terms that govern our service relationship
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {term.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{term.title}</h3>
                  <p className="text-gray-300 text-sm">{term.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Terms */}
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
                Service-Specific Terms
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Detailed terms for each of our technology services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceTerms.map((service, index) => (
                <motion.div
                  key={service.service}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.service}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Restrictions:</div>
                    <ul className="space-y-1">
                      {service.restrictions.map((restriction, restrictionIndex) => (
                        <li key={restrictionIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{restriction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Intended Usage:</div>
                    <p className="text-blue-400 text-sm font-semibold">{service.usage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
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
                User Obligations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your responsibilities when using our services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userObligations.map((obligation, index) => (
                <motion.div
                  key={obligation.obligation}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{obligation.obligation}</h3>
                  <p className="text-gray-300 mb-4">{obligation.description}</p>
                  <div>
                    <div className="text-gray-400 text-sm mb-2">Examples:</div>
                    <ul className="space-y-1">
                      {obligation.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Terms */}
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
                Payment & Billing Terms
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding our payment structure and billing policies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paymentTerms.map((term, index) => (
                <motion.div
                  key={term.term}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{term.term}</h3>
                  <p className="text-gray-300 mb-4">{term.description}</p>
                  <ul className="space-y-2">
                    {term.details.map((detail, detailIndex) => (
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

        {/* Liability Limitations */}
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
                Liability & Limitations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Important limitations on our liability and service guarantees
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {liabilityLimitations.map((limitation, index) => (
                <motion.div
                  key={limitation.limitation}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{limitation.limitation}</h3>
                  <p className="text-gray-300 mb-4">{limitation.description}</p>
                  <div className="text-orange-400 text-sm">{limitation.details}</div>
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
                Questions About Terms?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Contact our legal team for clarification on any terms or conditions
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
                <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  legal@ziontechgroup.com
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Accept our terms and begin using our revolutionary technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:legal@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Legal Questions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;