import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
} from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'Personal information (name, email, phone number, company)',
        'Business information (company size, industry, project requirements)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (website interactions, service usage patterns)',
        'Communication records (emails, phone calls, support tickets)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Process payments and manage accounts',
        'Send marketing communications (with consent)',
        'Analyze usage patterns and improve user experience',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Share with trusted service providers under strict confidentiality',
        'Comply with legal requirements and court orders',
        'Protect our rights, property, and safety',
        'Business transfers (with notice and choice)'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Industry-standard encryption for data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication measures',
        'Employee training on data protection',
        'Incident response and breach notification procedures'
      ]
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal information',
      icon: <User className="w-6 h-6" />
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing activities',
      icon: <Settings className="w-6 h-6" />
    }
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
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Your privacy is our priority. Learn how we protect and handle your personal information.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Shield className="w-6 h-6" />
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
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you use our services.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We believe in transparency and want you to understand how your information is handled. 
                    This policy applies to all users of our website, services, and applications.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Lock className="w-6 h-6" />
                    <span className="font-medium">Your data is safe with us</span>
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
                        <Shield className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Data Protection</h3>
                      <p className="text-gray-300">Enterprise-grade security for your information</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">256-bit</div>
                          <div className="text-gray-400">Encryption</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">99.9%</div>
                          <div className="text-gray-400">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Privacy Principles */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Privacy Principles</h2>
                <p className="text-xl text-gray-300">The foundation of how we handle your data</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {privacySections.map((section, index) => (
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

          {/* Your Rights */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Your Privacy Rights</h2>
                <p className="text-xl text-gray-300">You have control over your personal information</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {right.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Policy */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Privacy Information</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Information Collection</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We collect information you provide directly to us, such as when you create an account, 
                        request a quote, or contact our support team. We also automatically collect certain 
                        information about your device and how you interact with our services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        This may include your IP address, browser type, operating system, referring URLs, 
                        access times, and pages viewed. We use this information to improve our services 
                        and provide a better user experience.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Usage and Purpose</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use your information to provide, maintain, and improve our services, process 
                        transactions, send you technical notices and support messages, and respond to your 
                        comments and questions.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        With your consent, we may also use your information to send you marketing communications 
                        about our services, special offers, and updates. You can opt out of these communications 
                        at any time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy. We may share your information 
                        with trusted third-party service providers who assist us in operating our business.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These service providers are contractually obligated to keep your information confidential 
                        and use it only for the purposes for which we disclose it to them.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect 
                        your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These measures include encryption, access controls, regular security assessments, 
                        and employee training on data protection best practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services, 
                        comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When we no longer need your information, we will securely delete or anonymize it 
                        in accordance with our data retention policies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">International Data Transfers</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure that such transfers comply with applicable data protection laws and that 
                        appropriate safeguards are in place.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        For transfers to countries outside the European Economic Area, we rely on adequacy 
                        decisions, standard contractual clauses, or other appropriate safeguards.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on our 
                        website, analyze usage patterns, and provide personalized content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You can control cookie settings through your browser preferences. However, disabling 
                        certain cookies may affect the functionality of our services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Children's Privacy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services are not intended for children under the age of 13. We do not knowingly 
                        collect personal information from children under 13.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        If you believe we have collected information from a child under 13, please contact 
                        us immediately, and we will take steps to remove such information.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our 
                        practices or applicable laws. We will notify you of any material changes by posting 
                        the updated policy on our website.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Your continued use of our services after such changes constitutes acceptance of 
                        the updated policy. We encourage you to review this policy periodically.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About Privacy?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact us.
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

export default PrivacyPage;

 