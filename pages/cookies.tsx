import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Cookie, Settings, Eye, Lock, 
  CheckCircle, XCircle, Info, ArrowRight
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

  return (
    <Layout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies on our website to improve your experience and provide personalized services."
      keywords="cookie policy, cookies, privacy, Zion Tech Group, website cookies, data collection"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Cookie className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Understanding how we use cookies to improve your experience
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                This policy explains how Zion Tech Group uses cookies and similar technologies 
                on our website to provide you with the best possible experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
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
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  How Cookies Work
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">
                      Cookies are created when you visit our website and are stored in your browser
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">
                      They help us remember your preferences and provide personalized content
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">
                      Cookies can be session-based (temporary) or persistent (longer-term)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">
                      You have control over which cookies are stored on your device
                    </p>
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

        {/* Cookie Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We use different types of cookies for various purposes to enhance your experience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border ${
                    type.necessary ? 'border-green-500/50' : 'border-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {type.icon}
                    </div>
                    {type.necessary && (
                      <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                        Necessary
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400 font-semibold">Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example) => (
                        <li key={example} className="text-sm text-gray-300 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
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

        {/* Cookie Management */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                You have control over which cookies are stored on your device
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Browser Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Chrome</h4>
                      <p className="text-gray-300 text-sm">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Firefox</h4>
                      <p className="text-gray-300 text-sm">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Safari</h4>
                      <p className="text-gray-300 text-sm">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Cookie Consent</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Accept All</h4>
                      <p className="text-gray-300 text-sm">
                        Allow all cookies for the best user experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Reject Non-Essential</h4>
                      <p className="text-gray-300 text-sm">
                        Only allow necessary cookies for basic functionality
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Customize</h4>
                      <p className="text-gray-300 text-sm">
                        Choose which types of cookies to accept
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact of Disabling */}
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
                Impact of Disabling Cookies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding what happens when you choose to disable certain cookies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies cannot be disabled as they are necessary for the website to function properly.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-300 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Website will continue to work normally</span>
                  </li>
                  <li className="text-sm text-gray-300 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Basic functionality preserved</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">Non-Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Disabling these cookies may affect your experience but won't break the website.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-300 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-400" />
                    <span>Personalization features may not work</span>
                  </li>
                  <li className="text-sm text-gray-300 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-400" />
                    <span>Analytics data collection limited</span>
                  </li>
                  <li className="text-sm text-gray-300 flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-yellow-400" />
                    <span>Some features may be less optimized</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Updates and Contact */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Updates and Questions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay informed about changes to our cookie policy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Policy Updates</h3>
                <p className="text-gray-300 mb-6">
                  We may update this cookie policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-300">
                  When we make changes, we will update the "Last Updated" date at the top of this policy 
                  and notify you through our website or other appropriate means.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about our use of cookies or this cookie policy, 
                  please don't hesitate to contact us.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@ziontechgroup.com
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> +1 302 464 0950
                  </p>
                  <p className="text-gray-300">
                    <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need More Information?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Learn more about our privacy practices and data protection measures
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/privacy"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Privacy Policy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;