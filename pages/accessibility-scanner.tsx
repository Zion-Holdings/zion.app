import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility, Eye, CheckCircle, AlertTriangle, Info, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const AccessibilityScanner = () => {
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
                <Accessibility className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Accessibility Scanner
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensuring our website is accessible to all users through comprehensive scanning and compliance tools
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
              <Eye className="w-8 h-8 text-cyan-400 mr-3" />
              What We Scan For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Visual Accessibility</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Color contrast ratios</li>
                  <li>• Text size and readability</li>
                  <li>• Image alt text</li>
                  <li>• Focus indicators</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Navigation & Structure</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Heading hierarchy</li>
                  <li>• Keyboard navigation</li>
                  <li>• Skip links</li>
                  <li>• ARIA labels</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Content & Media</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Video captions</li>
                  <li>• Audio transcripts</li>
                  <li>• Form labels</li>
                  <li>• Error messages</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Technical Standards</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• WCAG 2.1 compliance</li>
                  <li>• Section 508 compliance</li>
                  <li>• Semantic HTML</li>
                  <li>• Screen reader compatibility</li>
                </ul>
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
              <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
              Current Accessibility Status
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">WCAG 2.1 AA</div>
                </div>
                <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-gray-300">Section 508</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-sm text-gray-300">Mobile Accessibility</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong>Status:</strong> Our website meets most accessibility standards. We continuously monitor and improve accessibility features to ensure the best experience for all users.
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
              <AlertTriangle className="w-8 h-8 text-orange-400 mr-3" />
              Areas for Improvement
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Color Contrast</h3>
                  <p className="text-gray-300 text-sm">
                    Some text elements could benefit from improved color contrast for better readability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Form Accessibility</h3>
                  <p className="text-gray-300 text-sm">
                    Enhanced form labels and error message associations for screen readers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Mobile Navigation</h3>
                  <p className="text-gray-300 text-sm">
                    Improved touch target sizes and mobile navigation patterns.
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
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              Accessibility Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Keyboard Navigation</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Tab navigation support</li>
                  <li>• Skip to content links</li>
                  <li>• Focus management</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Screen Reader Support</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Semantic HTML structure</li>
                  <li>• ARIA landmarks</li>
                  <li>• Descriptive alt text</li>
                  <li>• Form associations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Visual Enhancements</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• High contrast mode</li>
                  <li>• Font size controls</li>
                  <li>• Focus indicators</li>
                  <li>• Color-blind friendly design</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Content Alternatives</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Text alternatives</li>
                  <li>• Captions and transcripts</li>
                  <li>• Multiple content formats</li>
                  <li>• Clear error messages</li>
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
              <Shield className="w-8 h-8 text-blue-400 mr-3" />
              Compliance & Standards
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">WCAG 2.1 Guidelines</h3>
                  <p className="text-gray-300 text-sm">
                    We follow Web Content Accessibility Guidelines 2.1 Level AA standards for comprehensive accessibility compliance.
                  </p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Section 508 Compliance</h3>
                  <p className="text-gray-300 text-sm">
                    Our website meets Section 508 requirements for federal accessibility standards.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong>Note:</strong> We regularly audit our accessibility compliance and work with accessibility experts to ensure continuous improvement.
                </p>
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
            <h2 className="text-2xl font-bold text-white mb-4">Report Accessibility Issues</h2>
            <p className="text-gray-300 mb-6">
              If you encounter any accessibility issues or have suggestions for improvement, please let us know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Report Issue
              </Link>
              <Link 
                href="/support" 
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityScanner;