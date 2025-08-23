import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Clock, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const privacySections = [
  {
    title: 'Information We Collect',
    icon: <Eye className="w-6 h-6 text-cyan-400" />,
    content: [
      'Personal identification information (Name, email address, phone number)',
      'Technical information about your device and browser',
      'Usage data and analytics about how you interact with our services',
      'Cookies and similar tracking technologies',
      'Information you provide when contacting us or using our services'
    ]
  },
  {
    title: 'How We Use Your Information',
    icon: <FileText className="w-6 h-6 text-purple-400" />,
    content: [
      'Provide, maintain, and improve our services',
      'Process transactions and send related information',
      'Send technical notices, updates, security alerts, and support messages',
      'Respond to comments, questions, and customer service requests',
      'Monitor and analyze trends, usage, and activities in connection with our services'
    ]
  },
  {
    title: 'Information Sharing',
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    content: [
      'We do not sell, trade, or otherwise transfer your personal information to third parties',
      'We may share information with trusted service providers who assist us in operating our services',
      'We may disclose information if required by law or to protect our rights',
      'In the event of a merger or acquisition, information may be transferred to the new entity',
      'We may share aggregated, non-personally identifiable information publicly'
    ]
  },
  {
    title: 'Data Security',
    icon: <Lock className="w-6 h-6 text-orange-400" />,
    content: [
      'We implement appropriate security measures to protect your personal information',
      'Data is encrypted both in transit and at rest using industry-standard encryption',
      'Access to personal information is restricted to authorized personnel only',
      'Regular security audits and assessments are conducted',
      'We maintain incident response procedures for potential data breaches'
    ]
  }
];

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | Zion Tech Group"
        description="Learn about Zion Tech Group's privacy practices, data collection, usage policies, and how we protect your personal information."
        keywords={["privacy policy", "data protection", "privacy practices", "GDPR", "data security", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Privacy</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </motion.div>

            {/* Key Privacy Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {privacySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Privacy Policy */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Detailed Privacy Policy</h2>
                <p className="text-xl text-gray-400">
                  Complete information about our data practices and your rights.
                </p>
              </div>

              {/* Section 1: Information Collection */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Information We Collect</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, request information, or contact us for support.
                  </p>
                  <h4 className="text-lg font-semibold text-white">Personal Information</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, postal address, and phone number</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Account credentials and preferences</li>
                    <li>Communications with us, including support requests</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-white">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent on our website, and referring URLs</li>
                    <li>Device identifiers and mobile network information</li>
                    <li>Usage patterns and interactions with our services</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Use of Information */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2. How We Use Your Information</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We use the information we collect for various purposes, including to provide, 
                    maintain, and improve our services.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and deliver the services you request</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information, including changes to terms and policies</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Monitor and analyze usage and trends to improve our services</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                    <li>Personalize your experience and deliver targeted content</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Information Sharing */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">3. Information Sharing and Disclosure</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We do not sell, rent, or share your personal information with third parties for their 
                    direct marketing purposes without your consent.
                  </p>
                  <h4 className="text-lg font-semibold text-white">We may share information in the following situations:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With service providers who perform services on our behalf</li>
                    <li>To comply with legal obligations or respond to legal requests</li>
                    <li>To protect our rights, property, or safety, or that of others</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Data Security */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">4. Data Security</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and penetration testing</li>
                    <li>Access controls and employee training on data protection</li>
                    <li>Incident response procedures for data breaches</li>
                    <li>Compliance with industry security standards</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Your Rights */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">5. Your Rights and Choices</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Portability of your data</li>
                    <li>Restriction of processing</li>
                    <li>Objection to processing for direct marketing</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at privacy@ziontechgroup.com.
                  </p>
                </div>
              </div>

              {/* Section 6: Contact Information */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">6. Contact Us</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, 
                    please contact us:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Zion Tech Group</h4>
                    <div className="space-y-2">
                      <p>Email: privacy@ziontechgroup.com</p>
                      <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                      <p>Phone: +1 302 464 0950</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Updates Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"
            >
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Policy Updates</h3>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-sm text-gray-400">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

 