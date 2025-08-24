import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText
} from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2024';

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      content: [
        'Personal information (name, email, phone number)',
        'Company information and job titles',
        'Website usage data and analytics',
        'Communication preferences',
        'Technical information about your device and browser'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      content: [
        'Provide and improve our services',
        'Communicate with you about our offerings',
        'Personalize your experience',
        'Analyze website performance and usage',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Globe className="w-6 h-6" />,
      content: [
        'We do not sell your personal information',
        'Share with trusted service providers',
        'Comply with legal requirements',
        'Protect our rights and safety',
        'With your explicit consent'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: [
        'Industry-standard encryption protocols',
        'Regular security assessments',
        'Access controls and authentication',
        'Data backup and recovery procedures',
        'Employee security training'
      ]
    }
  ];

  const yourRights = [
    'Access your personal information',
    'Correct inaccurate data',
    'Request deletion of your data',
    'Object to processing',
    'Data portability',
    'Withdraw consent'
  ];

  const cookies = [
    'Essential cookies for website functionality',
    'Analytics cookies to understand usage',
    'Marketing cookies for personalized content',
    'Preference cookies for user settings'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              At Zion Tech Group, we understand the importance of privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
              use our services, or interact with us in any way.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you have any questions about this Privacy Policy, please contact us using the information provided below.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8 mb-12">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h3>
            <p className="text-gray-300 mb-6">
              You have certain rights regarding your personal information. We are committed to helping you exercise these rights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {yourRights.map((right, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>{right}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h3>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
            </p>
            <div className="space-y-4">
              {cookies.map((cookie, index) => (
                <div key={index} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{cookie}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect 
              the functionality of our website.
            </p>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Data Retention</h3>
            <p className="text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-300">
              When we no longer need your personal information, we will securely delete or anonymize it in accordance 
              with our data retention policies and applicable legal requirements.
            </p>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h3>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-300">
                  We will notify you of any material changes by posting the new Privacy Policy on this page and updating 
                  the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span>Data Protection Officer</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              We will respond to your inquiry within 30 days and work to address any concerns you may have about 
              our privacy practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to help. If you have any questions about our privacy practices or need to exercise your rights, 
              don't hesitate to reach out to us.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Contact Our Privacy Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
