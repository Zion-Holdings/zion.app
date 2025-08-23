import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, Globe, Clock, CheckCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-leading security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'All data processing follows strict security protocols and encryption standards.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and protect your information.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company name and job title', 'Contact preferences'],
      purpose: 'To provide our services and communicate with you'
    },
    {
      category: 'Technical Data',
      examples: ['IP address, browser type, device information', 'Usage analytics and performance data', 'Cookies and similar technologies'],
      purpose: 'To improve our services and ensure security'
    },
    {
      category: 'Service Data',
      examples: ['Service usage patterns', 'Feature preferences and settings', 'Support and communication history'],
      purpose: 'To optimize your experience and provide support'
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct inaccurate information',
    'Request deletion of your data',
    'Object to data processing',
    'Data portability',
    'Withdraw consent',
    'Lodge complaints with authorities'
  ];

  return (
    <Layout 
      title="Privacy Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group protects your privacy and handles your personal information in accordance with global data protection standards."
      keywords="privacy policy, data protection, GDPR, privacy rights, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your privacy is fundamental to us. Learn how we protect your information 
                and maintain the highest standards of data security and transparency.
              </p>
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Last updated: January 15, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We are committed to protecting your privacy through transparent practices and robust security measures.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <principle.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Information We Collect Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Information We Collect
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We collect only the information necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="space-y-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Purpose:</h4>
                      <p className="text-gray-300">{category.purpose}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Information Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Use Your Information
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We use your information responsibly to provide and improve our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Service Delivery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Providing our AI consciousness and quantum technology services</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Processing transactions and managing accounts</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Providing customer support and technical assistance</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Communicating important service updates</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Service Improvement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Analyzing usage patterns to improve functionality</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Developing new features and capabilities</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Optimizing performance and user experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Conducting research and development</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Protection & Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We implement comprehensive security measures to protect your information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Encryption',
                  description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
                  icon: Lock
                },
                {
                  title: 'Access Controls',
                  description: 'Strict access controls ensure only authorized personnel can access your information.',
                  icon: Shield
                },
                {
                  title: 'Regular Audits',
                  description: 'We conduct regular security audits and assessments to maintain the highest security standards.',
                  icon: Eye
                },
                {
                  title: 'Secure Infrastructure',
                  description: 'Our infrastructure is built with security-first principles and monitored 24/7.',
                  icon: Database
                },
                {
                  title: 'Compliance',
                  description: 'We maintain compliance with global data protection regulations including GDPR and CCPA.',
                  icon: Globe
                },
                {
                  title: 'Incident Response',
                  description: 'Comprehensive incident response plans ensure rapid response to any security concerns.',
                  icon: Clock
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                You have comprehensive rights regarding your personal information.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Your Rights Include:</h3>
                  <ul className="space-y-3">
                    {rights.map((right, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">How to Exercise Your Rights:</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-white mb-2">Contact Us</h4>
                      <p className="text-gray-300 text-sm">
                        Email us at privacy@ziontechgroup.com or use our contact form to request information about your data.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-white mb-2">Response Time</h4>
                      <p className="text-gray-300 text-sm">
                        We will respond to your request within 30 days and provide the requested information or explanation.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-white mb-2">Verification</h4>
                      <p className="text-gray-300 text-sm">
                        We may need to verify your identity before processing certain requests to protect your privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're committed to transparency and are here to answer any questions about our privacy practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Privacy Team
                  <Shield className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPage;

 