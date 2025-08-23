import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

const CookiePolicy = () => {
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
                <Cookie className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we use cookies and similar technologies to enhance your experience on our website
            </p>
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
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Remembering your preferences and settings</li>
              <li>Analyzing how you use our website</li>
              <li>Providing personalized content and advertisements</li>
              <li>Ensuring the website functions properly</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-8 h-8 text-purple-400 mr-3" />
              Types of Cookies We Use
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-300">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-300">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                <p className="text-gray-300">
                  These cookies enable enhanced functionality and personalization, such as remembering your language preferences and login status.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                <p className="text-gray-300">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>
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
              <Eye className="w-8 h-8 text-green-400 mr-3" />
              How We Use Cookies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Website Functionality</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• User authentication</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Form submissions</li>
                  <li>• Language preferences</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Analytics & Performance</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Page load times</li>
                  <li>• User behavior analysis</li>
                  <li>• Traffic sources</li>
                  <li>• Error tracking</li>
                </ul>
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
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-6">
              You have control over how cookies are used on your device. Here are your options:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Browser Settings</h3>
                  <p className="text-gray-300 text-sm">
                    Most web browsers allow you to control cookies through their settings. You can delete existing cookies and choose whether to accept new ones.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Cookie Consent</h3>
                  <p className="text-gray-300 text-sm">
                    When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Third-Party Opt-Out</h3>
                  <p className="text-gray-300 text-sm">
                    For third-party cookies, you can often opt out through the respective service providers' websites.
                  </p>
                </div>
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
              <Database className="w-8 h-8 text-blue-400 mr-3" />
              Data Protection & Privacy
            </h2>
            <p className="text-gray-300 mb-4">
              We are committed to protecting your privacy and ensuring transparency in how we use cookies. Our cookie usage complies with applicable data protection laws and regulations.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <strong>Note:</strong> For more detailed information about how we collect, use, and protect your personal data, please refer to our{' '}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our cookie policy or how we use cookies, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy" 
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;