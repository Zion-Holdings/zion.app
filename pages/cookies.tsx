import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Cookie, Settings, Eye, Lock, 
  CheckCircle, XCircle, Info, ArrowRight,
  Database, Users, Globe
} from 'lucide-react';
import Link from 'next/link';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication cookies', 'Security cookies', 'Session management'],
      necessary: true,
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      necessary: false,
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'User settings', 'Form data'],
      necessary: false,
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      necessary: false,
      icon: <Cookie className="w-6 h-6" />
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: '_gat',
      purpose: 'Google Analytics - Used to throttle request rate',
      duration: '1 minute',
      provider: 'Google'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ];

  const privacyFeatures = [
    {
      title: "Transparency",
      description: "Clear information about how we use cookies",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Control",
      description: "Easy-to-use cookie management tools",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "Secure handling of all cookie data",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Compliance",
      description: "Full compliance with privacy regulations",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about our cookie policy and how we use cookies to improve your experience on our website."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance your experience 
                on our website while protecting your privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      <Cookie className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold">Understanding Cookies</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Cookies help us provide you with a better experience by remembering your preferences, 
                    analyzing how you use our site, and personalizing content.
                  </p>
                  <p className="text-gray-300">
                    They are essential for the proper functioning of our website and help us improve 
                    our services based on user behavior and preferences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Session Cookies</h4>
                    <p className="text-gray-400">Temporary cookies that are deleted when you close your browser</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Persistent Cookies</h4>
                    <p className="text-gray-400">Cookies that remain on your device for a set period</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Third-Party Cookies</h4>
                    <p className="text-gray-400">Cookies set by external services we use</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl border border-purple-500/20 flex items-center justify-center">
                  <Cookie className="w-24 h-24 text-purple-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Types of Cookies We Use</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We use different types of cookies to provide you with the best possible experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{type.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Specific Cookies We Use
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Detailed information about the specific cookies used on our website
              </p>
            </motion.div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left p-6 text-white font-semibold">Cookie Name</th>
                    <th className="text-left p-6 text-white font-semibold">Purpose</th>
                    <th className="text-left p-6 text-white font-semibold">Duration</th>
                    <th className="text-left p-6 text-white font-semibold">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={cookie.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors duration-300"
                    >
                      <td className="p-6">
                        <code className="bg-gray-800/50 text-purple-400 px-2 py-1 rounded text-sm">
                          {cookie.name}
                        </code>
                      </td>
                      <td className="p-6 text-gray-300">{cookie.purpose}</td>
                      <td className="p-6 text-gray-300">{cookie.duration}</td>
                      <td className="p-6 text-gray-300">{cookie.provider}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Management Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-6">Manage Your Cookie Preferences</h2>
              <p className="text-xl text-gray-400 mb-8">
                You have full control over which cookies you accept and can change your preferences at any time
              </p>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-4">How to Manage Cookies</h3>
                <div className="text-left space-y-4 text-gray-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Cookie Banner:</strong> Use our cookie consent banner to manage preferences
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Contact Us:</strong> Reach out if you have questions about our cookie policy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Questions About Our Cookie Policy?</h2>
              <p className="text-xl text-gray-400 mb-8">
                We're here to help clarify any questions you may have about how we use cookies
              </p>
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;
