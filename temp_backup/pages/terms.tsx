import React from 'react';
      ]
    },
    {
      title: 'Quantum Technology Services',
      terms: [
        'Quantum computing resources are allocated based on service tier',
        'Users must comply with export control regulations',
        'Performance metrics are provided for informational purposes only',
        'Service interruptions may occur during quantum system calibration'
      ]
    },
    {
      title: 'Cybersecurity Services',
      terms: [
        'Security assessments are conducted according to industry standards',
        'Vulnerability reports are confidential and must not be shared',
        'Penetration testing requires written authorization',
        'Incident response follows our established protocols'
=======
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  User, Lock, Globe, Scale, Clock, Mail
} from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'By accessing or using our services, you agree to be bound by these terms',
        'If you do not agree to these terms, do not use our services',
        'We may modify these terms at any time with notice',
        'Continued use after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'AI and machine learning solutions',
        'Quantum computing services',
        'IT infrastructure and consulting',
        'Micro SAAS applications',
        'Business automation services',
        'Technical support and maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <User className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide accurate and complete information',
        'Maintain security of your account credentials',
        'Comply with applicable laws and regulations',
        'Use services for lawful purposes only',
        'Respect intellectual property rights'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Our services and content are protected by copyright',
        'You retain rights to your own content',
        'No transfer of intellectual property rights',
        'License to use our services as intended',
        'Prohibition of reverse engineering'
      ]
    }
  ];

  const prohibitedActivities = [
import { motion } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  Globe, Calendar, Scale, Users, ArrowRight,
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react';

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      icon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Zion Tech Group's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.`,
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`,
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`,
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`,
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    },
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
=======
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  },
  {
    title: 'Use License',
    icon: <Scale className="w-6 h-6 text-blue-400" />,
    content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.'
  },
  {
    title: 'Disclaimer',
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
    content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.'
  },
  {
    title: 'Limitations',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  }
];

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service, including usage policies, user agreements, and legal conditions for accessing our technology services."
        keywords={["terms of service", "user agreement", "legal terms", "conditions of use", "service agreement", "Zion Tech Group"]}
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
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These terms govern your use of our services and establish our mutual rights and obligations.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using our website, services, or any content provided by Zion Tech Group, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology solutions and services including, but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>Cloud computing and infrastructure services</li>
                <li>Blockchain technology solutions</li>
                <li>Data analytics and business intelligence</li>
                <li>Web and mobile application development</li>
                <li>Technology consulting and advisory services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                Some of our services may require you to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services to transmit harmful or malicious code</li>
                <li>Attempt to reverse engineer or copy our technology</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Service Availability and Modifications</h2>
              <p className="text-gray-600 mb-4">
                We strive to provide reliable and continuous service, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Modify or discontinue services at any time</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Update or change our services to improve functionality</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Any damages resulting from the use of our services</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from and against any claims, damages, losses, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time.
              </p>
              <p className="text-gray-600 mb-4">
                Upon termination, your right to use our services will cease immediately, and we may delete or remove any content associated with your account.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 mb-4">
                Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
              <p className="text-gray-600 mb-4">
                These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Zion Tech Group regarding your use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Zion Tech Group</strong><br />
                  Email: legal@ziontechgroup.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Obligations Section */}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
=======
                User Obligations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                By using our services, you agree to fulfill these obligations.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Your Responsibilities:</h3>
                  <ul className="space-y-3">
                    {userObligations.map((obligation, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Consequences of Non-Compliance:</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">Warning</h4>
                      <p className="text-gray-300 text-sm">
                        First violations may result in warnings and temporary service restrictions.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Suspension</h4>
                      <p className="text-gray-300 text-sm">
                        Repeated violations may lead to temporary service suspension.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-red-400 mb-2">Termination</h4>
                      <p className="text-gray-300 text-sm">
                        Severe or repeated violations may result in permanent service termination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liability Limitations */}
=======
=======
        {/* Intellectual Property Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Liability & Limitations
=======
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intellectual Property
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding our intellectual property rights and your usage permissions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Additional Terms
              </h2>
              <p className="text-lg text-gray-300">
                Additional terms that apply to specific services or situations.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability to you for any claims arising from the use of our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Governing Law</h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of the United States.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Changes to Terms</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

=======
        {/* Limitation of Liability Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Questions About Terms?
=======
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limitation of Liability
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the scope of our liability and your rights as a user.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Service Limitations:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Services are provided "as-is" without warranties</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>We are not liable for indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Liability is limited to the amount paid for services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Force Majeure:</h3>
                  <p className="text-gray-300 mb-4">
                    We are not liable for delays or failures due to circumstances beyond our control, including:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Natural disasters and extreme weather</li>
                    <li>• Government actions and regulations</li>
                    <li>• Infrastructure failures and cyber attacks</li>
                    <li>• Global pandemics and health emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
=======
=======
        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're here to clarify any questions about our terms of service and help ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Legal Team
                  <FileText className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
=======
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Download Terms PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
=======
      {/* Terms Overview */}
      <section id="terms-sections" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key sections of our terms of service and what they cover
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-300 text-sm">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories & Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed terms for each category of services we provide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.category}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.restrictions.map((restriction, restrictionIndex) => (
                          <li key={restrictionIndex} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {restriction}
                          </li>
                        ))}
                      </ul>
=======
    'Unauthorized access to our systems or networks',
    'Interference with service operation',
    'Distribution of malware or harmful code',
    'Violation of third-party rights',
    'Attempts to gain unauthorized access',
    'Use of services for illegal activities'
  ];

  const limitations = [
    'Services provided "as is" without warranties',
    'No guarantee of uninterrupted service',
    'Limitation of liability for damages',
    'No responsibility for third-party content',
    'Service availability subject to change',
    'Technical support during business hours only'
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Terms of Service
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Please read these terms carefully before using our services. They govern your use of Zion Tech Group's technology solutions.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <FileText className="w-6 h-6" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Understanding Our Terms
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    These Terms of Service establish the rules and guidelines for using Zion Tech Group's 
                    services. They protect both you and us, ensuring a clear understanding of our relationship 
                    and responsibilities.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to 
                    be bound by these terms. If you have any questions, please contact us before proceeding.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Scale className="w-6 h-6" />
                    <span className="font-medium">Clear and fair terms</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <FileText className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Legal Framework</h3>
                      <p className="text-gray-300">Protecting your rights and ours</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">100%</div>
                          <div className="text-gray-400">Transparent</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">24/7</div>
                          <div className="text-gray-400">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Terms */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Key Terms and Conditions</h2>
                <p className="text-xl text-gray-300">Essential information about using our services</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {termsSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Prohibited Activities</h2>
                <p className="text-xl text-gray-300">Activities that are not allowed when using our services</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">What You Cannot Do</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    <strong>Note:</strong> Violation of these prohibitions may result in immediate suspension 
                    or termination of your access to our services, and may be reported to appropriate authorities.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Service Limitations */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Service Limitations and Disclaimers</h2>
                <p className="text-xl text-gray-300">Important information about service availability and warranties</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Service Limitations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{limitation}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Important:</strong> These limitations are designed to set realistic expectations 
                    and protect both parties. We strive to provide excellent service but cannot guarantee 
                    perfection in all circumstances.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Detailed Terms */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Terms and Conditions</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">1. Service Agreement</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        This agreement is between Zion Tech Group ("we," "us," or "our") and you ("user," 
                        "client," or "customer"). By using our services, you agree to these terms and 
                        acknowledge that you have read and understood them.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We reserve the right to modify these terms at any time. Changes will be effective 
                        immediately upon posting on our website. Your continued use of services after changes 
                        constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">2. Service Description and Availability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services include AI and machine learning solutions, quantum computing services, 
                        IT infrastructure consulting, micro SAAS applications, business automation, and 
                        technical support.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We strive to maintain high service availability but cannot guarantee uninterrupted 
                        access. Services may be temporarily unavailable due to maintenance, updates, or 
                        circumstances beyond our control.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">3. User Accounts and Responsibilities</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        You are responsible for maintaining the confidentiality of your account credentials 
                        and for all activities that occur under your account. You must notify us immediately 
                        of any unauthorized use.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to provide accurate, current, and complete information when creating 
                        accounts and using our services. You must use services only for lawful purposes 
                        and in compliance with applicable laws and regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">4. Payment Terms and Billing</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Service fees are billed according to the pricing schedule in effect at the time 
                        of service. All fees are non-refundable except as expressly stated in our refund policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We may change our pricing with 30 days' notice. Late payments may result in service 
                        suspension or termination. You are responsible for all applicable taxes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services, including software, content, and technology, are protected by copyright, 
                        trademark, and other intellectual property laws. You retain rights to your own content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You may not copy, modify, distribute, sell, or lease any part of our services without 
                        our written permission. You may not reverse engineer or attempt to extract source code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">6. Data Privacy and Security</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We are committed to protecting your privacy and data security. Our collection and 
                        use of personal information is governed by our Privacy Policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We implement appropriate security measures to protect your data, but cannot guarantee 
                        absolute security. You are responsible for maintaining the security of your own systems.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        To the maximum extent permitted by law, our liability for any claims arising from 
                        the use of our services is limited to the amount you paid for services in the 
                        12 months preceding the claim.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We are not liable for indirect, incidental, special, consequential, or punitive 
                        damages, including lost profits, data, or business opportunities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">8. Termination and Suspension</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Either party may terminate this agreement with written notice. We may suspend or 
                        terminate services immediately for violations of these terms or for non-payment.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Upon termination, your access to services will cease, and we may delete your data 
                        in accordance with our data retention policies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">9. Governing Law and Disputes</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        These terms are governed by the laws of Delaware, United States. Any disputes will 
                        be resolved through binding arbitration in accordance with the rules of the American 
                        Arbitration Association.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to resolve disputes individually and waive any right to participate in 
                        class action lawsuits or class-wide arbitration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">10. Contact Information</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        For questions about these terms or our services, please contact us at:
                      </p>
                      <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-300">
                          <strong>Email:</strong> kleber@ziontechgroup.com
                        </p>
                        <p className="text-gray-300">
                          <strong>Phone:</strong> +1 302 464 0950
                        </p>
                        <p className="text-gray-300">
                          <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms and conditions carefully before using our services.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Terms Overview</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                These Terms of Service govern your use of Zion Tech Group's website and services. 
                By using our services, you agree to these terms.
              </p>
            </motion.div>

            {/* Key Terms Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {termsSections.map((section, index) => (
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
                  <p className="text-gray-300">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
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
                <h2 className="text-4xl font-bold mb-4">Detailed Terms and Conditions</h2>
                <p className="text-xl text-gray-400">
                  Complete terms governing your use of our services.
                </p>
              </div>

              {/* Section 1: Definitions */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Definitions</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    The following terms shall have the meanings set forth below:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>"Company"</strong> refers to Zion Tech Group</li>
                    <li><strong>"Services"</strong> refers to our website, platforms, and technology solutions</li>
                    <li><strong>"User"</strong> refers to any individual or entity using our services</li>
                    <li><strong>"Content"</strong> refers to all text, data, information, software, and other materials</li>
                    <li><strong>"Agreement"</strong> refers to these Terms of Service</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Acceptance */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2. Acceptance of Terms</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing, browsing, or using our services, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to these terms, please do not use our services. We reserve the 
                    right to modify these terms at any time, and such modifications will be effective 
                    immediately upon posting.
                  </p>
                </div>
              </div>

              {/* Section 3: Use of Services */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">3. Use of Services</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Permitted Use</h4>
                  <p>
                    You may use our services for lawful purposes only. You agree not to use the services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>In any way that violates applicable laws or regulations</li>
                    <li>To transmit or distribute viruses, malware, or other harmful code</li>
                    <li>To interfere with or disrupt the integrity or performance of our services</li>
                    <li>To attempt to gain unauthorized access to our systems</li>
                    <li>To impersonate any person or entity or misrepresent your affiliation</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-white">Account Security</h4>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account.
                  </p>
                </div>
              </div>

              {/* Section 4: Intellectual Property */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">4. Intellectual Property Rights</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    All content, features, and functionality of our services are owned by Zion Tech Group 
                    and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <h4 className="text-lg font-semibold text-white">License Grant</h4>
                  <p>
                    Subject to these terms, we grant you a limited, non-exclusive, non-transferable license 
                    to access and use our services for your personal or business use.
                  </p>
                  <h4 className="text-lg font-semibold text-white">Restrictions</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You may not reproduce, distribute, or create derivative works</li>
                    <li>You may not reverse engineer or attempt to extract source code</li>
                    <li>You may not remove or alter any proprietary notices</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Privacy */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">5. Privacy</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of our services, to understand our practices.
                  </p>
                  <p>
                    By using our services, you consent to the collection and use of information as 
                    outlined in our Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Section 6: Disclaimers */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-red-400 mb-4">6. Disclaimers and Limitations</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Service Availability</h4>
                  <p>
                    We strive to maintain service availability but do not guarantee uninterrupted access. 
                    Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white">Disclaimer of Warranties</h4>
                  <p>
                    Our services are provided "as is" and "as available" without warranties of any kind, 
                    either express or implied, including but not limited to warranties of merchantability 
                    or fitness for a particular purpose.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white">Limitation of Liability</h4>
                  <p>
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising from your 
                    use of our services.
                  </p>
                </div>
              </div>

              {/* Section 7: Termination */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">7. Termination</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for any reason whatsoever, including breach of these terms.
                  </p>
                  <p>
                    Upon termination, your right to use our services will cease immediately, and you 
                    must discontinue all use of our services.
                  </p>
                </div>
              </div>

              {/* Section 8: Governing Law */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">8. Governing Law</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the 
                    State of Delaware, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                    of the courts located in Delaware.
                  </p>
                </div>
              </div>

              {/* Section 9: Contact Information */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">9. Contact Information</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Zion Tech Group</h4>
                    <div className="space-y-2">
                      <p>Email: legal@ziontechgroup.com</p>
                      <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                      <p>Phone: +1 302 464 0950</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agreement Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"
            >
              <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
              <p className="text-gray-300 mb-6">
                By using our services, you acknowledge that you have read and understood these Terms of Service 
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.
              </p>
              <p className="text-sm text-gray-400">
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;
=======
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  If you have any questions about these Terms of Service or need clarification on any 
                  provision, please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    Contact Form
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default TermsPage;
