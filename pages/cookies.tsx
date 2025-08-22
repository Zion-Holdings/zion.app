import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Settings, Eye, Lock, Cookie, 
  CheckCircle, XCircle, Info, ArrowRight,
  Database, BarChart3, Target, Users
} from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Authentication', 'Security', 'Session management'],
      icon: <Shield className="w-6 h-6 text-green-400" />,
      color: 'border-green-500/30',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400'
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      color: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400'
    },
    {
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language settings', 'Theme preferences', 'Form data'],
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      color: 'border-purple-500/30',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400'
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track marketing campaign performance.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      icon: <Target className="w-6 h-6 text-orange-400" />,
      color: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      purpose: 'Google Analytics - Used to distinguish unique users',
      duration: '2 years',
      type: 'Analytics',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics - Used to distinguish users',
      duration: '24 hours',
      type: 'Analytics',
      provider: 'Google'
    },
    {
      name: 'session_id',
      purpose: 'Maintains user session and authentication state',
      duration: 'Session',
      type: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'preferences',
      purpose: 'Stores user preferences and settings',
      duration: '1 year',
      type: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: 'marketing_consent',
      purpose: 'Tracks user consent for marketing communications',
      duration: '2 years',
      type: 'Marketing',
      provider: 'Zion Tech Group'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to enhance your 
              experience on our website and provide personalized services.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Shield className="w-6 h-6" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Settings className="w-6 h-6" />
                <span>User Control</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Eye className="w-6 h-6" />
                <span>Transparency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                What Are Cookies?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cookie className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Small Data Files</h3>
                    <p className="text-gray-400">Tiny text files stored on your device</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Information Storage</h3>
                    <p className="text-gray-400">Store preferences, settings, and usage data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">User Experience</h3>
                    <p className="text-gray-400">Enhance website functionality and personalization</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Cookie Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Faster website loading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Personalized content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Improved security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Better user experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-400">Understanding the different categories of cookies and their purposes</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example) => (
                          <span
                            key={example}
                            className={`px-3 py-1 rounded-full text-sm ${type.bgColor} ${type.textColor} border ${type.color}`}
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Detailed Cookie Information
            </h2>
            <p className="text-xl text-gray-400">Specific cookies we use and their detailed purposes</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50">
              <thead>
                <tr className="border-b border-gray-800/50">
                  <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <motion.tr
                    key={cookie.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <code className="px-2 py-1 bg-gray-800/50 text-cyan-400 rounded text-sm">
                        {cookie.name}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{cookie.purpose}</td>
                    <td className="px-6 py-4 text-gray-300">{cookie.duration}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                        cookie.type === 'Analytics' ? 'bg-blue-500/20 text-blue-400' :
                        cookie.type === 'Functional' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{cookie.provider}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-400">Take control of your privacy and cookie settings</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-cyan-400" />
                Browser Settings
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. 
                You can delete existing cookies and prevent new ones from being stored.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Delete existing cookies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Block specific cookie types</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Set privacy preferences</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-400" />
                Our Cookie Banner
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                When you first visit our website, you'll see a cookie consent banner 
                that allows you to choose which types of cookies to accept.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Accept all cookies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Customize preferences</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Reject non-essential</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact of Disabling Cookies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Impact of Disabling Cookies
            </h2>
            <p className="text-xl text-gray-400">What happens when you choose to disable certain cookie types</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-400" />
                What You'll Lose
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Personalized content and recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Saved preferences and settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Faster login and form completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Enhanced website functionality</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                What You'll Keep
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Core website functionality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Access to all content and services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Security and authentication features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic website performance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have questions about our cookie policy or need help managing your preferences, 
              our privacy team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Privacy Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}