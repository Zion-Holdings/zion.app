import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-300">
            Learn how we use cookies and similar technologies to enhance your experience.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
        >
          <div className="flex items-center text-cyan-400 mb-2">
            <Lock className="w-5 h-5 mr-2" />
            <span className="font-semibold">Last Updated:</span>
          </div>
          <p className="text-white">December 2024</p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* What Are Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit, such as your preferred language 
                and other settings.
              </p>
              <p>
                Cookies can make your next visit easier and the site more useful to you. They help us 
                provide you with a better experience by understanding how you use our website.
              </p>
            </div>
          </motion.section>

          {/* How We Use Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-cyan-400" />
              How We Use Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Security Cookies:</strong> Help protect against fraud and maintain security</li>
              </ul>
            </div>
          </motion.section>

          {/* Types of Cookies We Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. They help 
                  maintain your session and remember your preferences during your visit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. 
                  They help us remember your preferences for future visits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p>
                  These cookies are set by third-party services we use, such as analytics providers 
                  and social media platforms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Specific Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />
              Specific Cookies We Use
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 text-white font-semibold">Cookie Name</th>
                      <th className="text-left py-2 text-white font-semibold">Purpose</th>
                      <th className="text-left py-2 text-white font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr>
                      <td className="py-2 text-cyan-400 font-mono">session_id</td>
                      <td className="py-2">Maintains your session</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-cyan-400 font-mono">preferences</td>
                      <td className="py-2">Stores your preferences</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-cyan-400 font-mono">analytics</td>
                      <td className="py-2">Website usage analytics</td>
                      <td className="py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* Managing Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>You have several options for managing cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Opt out of third-party cookies through their respective websites</li>
                <li><strong>Delete Cookies:</strong> Clear existing cookies from your browser</li>
              </ul>
              <p>
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>
          </motion.section>

          {/* Third-Party Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Third-Party Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We use third-party services that may set cookies on your device:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Social Media:</strong> Social media integration and sharing features</li>
                <li><strong>Payment Processors:</strong> Secure payment processing services</li>
                <li><strong>Customer Support:</strong> Live chat and support tools</li>
              </ul>
              <p>
                These services have their own privacy policies and cookie practices. We recommend 
                reviewing their policies for more information.
              </p>
            </div>
          </motion.section>

          {/* Updates to Policy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-cyan-400" />
              Updates to This Policy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new policy on this page 
                and updating the "Last Updated" date. We encourage you to review this policy 
                periodically.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Email: kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Phone: +1 (302) 464-0950</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}