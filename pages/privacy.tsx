import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Settings
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const PrivacyPage: React.FC = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      content: [
        'Contact details you provide (name, email, phone) when reaching out or subscribing',
        'Service usage data (pages viewed, events) for analytics and product improvement',
        'Technical data (IP address, browser) for security and reliability',
        'Communication preferences and marketing consent'
      ]
    },
    {
      title: 'How We Use Information',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide, maintain, and improve our services',
        'Communicate about updates, offers, and support',
        'Ensure security, prevent fraud, and comply with legal obligations',
        'Personalize your experience and provide relevant content'
      ]
    },
    {
      title: 'Data Sharing & Third Parties',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'We do not sell personal information to third parties',
        'We may share with trusted processors (e.g., hosting, analytics) under DPAs',
        'All third-party access is controlled and monitored',
        'We require strict confidentiality agreements from all partners'
      ]
    },
    {
      title: 'Data Security & Protection',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      content: [
        'Encryption in transit and at rest using industry-standard protocols',
        'Access controls and authentication requirements',
        'Regular security audits and vulnerability assessments',
        'Employee training on data protection and privacy'
      ]
    },
    {
      title: 'Data Retention & Deletion',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      content: [
        'We retain data for as long as necessary to provide services',
        'Data is automatically deleted when no longer needed',
        'You can request deletion of your personal data at any time',
        'We maintain audit logs for compliance and security purposes'
      ]
    },
    {
      title: 'Your Privacy Rights',
      icon: <Eye className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      content: [
        'Access and review your personal data',
        'Request correction of inaccurate information',
        'Request deletion of your data',
        'Opt-out of marketing communications'
      ]
    }
  ];

  const lastUpdated = '2025-02-07';

  return (
    <Layout>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Zion Tech Group Privacy Policy: Learn about our data collection, usage, security measures, and your privacy rights. We are committed to protecting your personal information."
        keywords={["privacy policy", "data protection", "personal information", "privacy rights", "Zion Tech Group", "GDPR", "data security"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We respect your privacy and are committed to protecting your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
              
              {/* Last Updated */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>Last updated: {new Date(lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Privacy Commitment
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to transparency and protecting your privacy rights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-6`}>
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Additional Privacy Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Important details about cookies, international transfers, and legal compliance.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Cookies & Tracking</h3>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar technologies to improve your experience, analyze site usage, and provide personalized content. 
                  You can control cookie preferences through your browser settings.
                </p>
                <p className="text-gray-300">
                  Our analytics tools help us understand how visitors use our site, but we do not track individual users across other websites.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">International Data Transfers</h3>
                <p className="text-gray-300 mb-4">
                  Your data may be processed in countries other than your own. We ensure all international transfers comply with applicable data protection laws.
                </p>
                <p className="text-gray-300">
                  We use standard contractual clauses and other safeguards to protect your data when it's transferred internationally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Legal Compliance</h3>
                <p className="text-gray-300 mb-4">
                  We comply with applicable data protection laws including GDPR, CCPA, and other privacy regulations.
                </p>
                <p className="text-gray-300">
                  We may disclose your information if required by law or to protect our rights, property, or safety.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our privacy team if you have questions or want to exercise your privacy rights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="/terms"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Terms of Service
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

 