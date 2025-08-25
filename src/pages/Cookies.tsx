import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Globe, Mail, Phone } from 'lucide-react';

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
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
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
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
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
              <Database className="w-6 h-6 mr-3 text-cyan-400" />
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
              <Settings className="w-6 h-6 mr-3 text-cyan-400" />
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
              <Globe className="w-6 h-6 mr-3 text-cyan-400" />
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
              <Settings className="w-6 h-6 mr-3 text-cyan-400" />
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
              <Mail className="w-6 h-6 mr-3 text-cyan-400" />
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Email: kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
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
            <Globe className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Settings, Eye, Database } from 'lucide-react';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, privacy, data protection, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Cookie</span> Policy
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Understanding how we use cookies and similar technologies to enhance your experience on Zion Tech Group.
            </p>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Are Cookies?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  We use cookies responsibly and in accordance with applicable privacy laws to ensure 
                  your data is protected while providing you with the best possible service.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Secure & Private</h3>
                <p className="text-zion-slate-light text-center">
                  All cookies are encrypted and used only for legitimate purposes to improve your experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Essential Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Required for basic website functionality and security.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Authentication</li>
                  <li>• Security</li>
                  <li>• Basic navigation</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Analytics Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Help us understand how visitors use our website.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Page views</li>
                  <li>• User behavior</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Preference Cookies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Remember your settings and preferences.
                </p>
                <ul className="text-zion-slate-light text-sm space-y-1">
                  <li>• Language settings</li>
                  <li>• Theme preferences</li>
                  <li>• Customized content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="py-16 px-4 bg-zion-blue-light/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Improving Your Experience</h3>
                <ul className="text-zion-slate-light space-y-2">
                  <li>• Remember your login preferences</li>
                  <li>• Customize content based on your interests</li>
                  <li>• Provide personalized recommendations</li>
                  <li>• Optimize website performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Analytics & Insights</h3>
                <ul className="text-zion-slate-light space-y-2">
                  <li>• Understand how you use our services</li>
                  <li>• Identify areas for improvement</li>
                  <li>• Measure the effectiveness of our content</li>
                  <li>• Optimize user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Managing Your Cookies</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-zion-slate-light space-y-2">
                  <li>• View all cookies stored on your device</li>
                  <li>• Delete specific cookies or all cookies</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Set preferences for different types of cookies</li>
                </ul>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Cookie Consent</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  We respect your privacy choices and provide clear options for managing cookie preferences.
                </p>
                <div className="text-center">
                  <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg transition-colors">
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              If you have any questions about our cookie policy or how we use cookies, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  );
}