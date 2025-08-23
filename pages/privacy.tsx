import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <p>Last updated: January 15, 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 text-cyan-400 mr-3" />
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company and job title information</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Website usage and interaction data</li>
                  <li>Service usage patterns and preferences</li>
                  <li>Technical information about your device</li>
                  <li>IP address and location data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking</h3>
                <p className="text-gray-300 mb-2">
                  We use cookies and similar technologies to enhance your experience. For detailed information, see our{' '}
                  <Link href="/cookies" className="text-cyan-400 hover:text-cyan-300 underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Database className="w-8 h-8 text-purple-400 mr-3" />
              How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Service Delivery</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Providing our services</li>
                  <li>• Processing payments</li>
                  <li>• Customer support</li>
                  <li>• Account management</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Communication</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Service updates</li>
                  <li>• Marketing communications</li>
                  <li>• Newsletter subscriptions</li>
                  <li>• Important announcements</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Improvement</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Service optimization</li>
                  <li>• User experience enhancement</li>
                  <li>• Product development</li>
                  <li>• Analytics and research</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Security</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fraud prevention</li>
                  <li>• Security monitoring</li>
                  <li>• Compliance requirements</li>
                  <li>• Legal obligations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Users className="w-8 h-8 text-green-400 mr-3" />
              Information Sharing
            </h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Service Providers</h3>
                  <p className="text-gray-300 text-sm">
                    We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Legal Requirements</h3>
                  <p className="text-gray-300 text-sm">
                    We may disclose information when required by law or to protect our rights, property, or safety, or that of our users or others.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Business Transfers</h3>
                  <p className="text-gray-300 text-sm">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-8 h-8 text-red-400 mr-3" />
              Data Security
            </h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Technical Measures</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Encryption in transit and at rest</li>
                  <li>• Secure authentication systems</li>
                  <li>• Regular security assessments</li>
                  <li>• Access controls and monitoring</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Organizational Measures</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Employee training and awareness</li>
                  <li>• Data handling policies</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular policy reviews</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              Your Rights and Choices
            </h2>
            <p className="text-gray-300 mb-6">
              You have certain rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Access and Control</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Access your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your data</li>
                  <li>• Restrict processing</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Communication Preferences</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Opt-out of marketing emails</li>
                  <li>• Manage newsletter subscriptions</li>
                  <li>• Control cookie preferences</li>
                  <li>• Update contact information</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/cookies" 
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

 