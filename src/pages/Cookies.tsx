import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe, Mail, Phone } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
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
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8"
          >
            <div className="flex items-center text-cyan-400 mb-2">
              <Settings className="w-5 h-5 mr-2" />
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
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-cyan-400" />
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
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
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
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Types of Cookies We Use
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                  <p className="text-gray-300 text-sm">Required for basic website functionality and security.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm">Help us understand how visitors use our website.</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Preference Cookies</h3>
                  <p className="text-gray-300 text-sm">Remember your settings and preferences.</p>
                </div>
              </div>
            </motion.section>

            {/* Managing Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Managing Your Cookies
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View all cookies stored on your device</li>
                  <li>Delete specific cookies or all cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
                <p className="mt-4">
                  We respect your privacy choices and provide clear options for managing cookie preferences.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                Questions About Cookies?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about our cookie policy or how we use cookies, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                  <Link
                    to="/privacy"
                    className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-200"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
            >
              <Globe className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}