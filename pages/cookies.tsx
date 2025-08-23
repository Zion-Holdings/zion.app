import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Cookie, Settings, Eye, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Infinity, Sparkles, Clock, Zap, Globe,
  Download, ExternalLink, Play, Headphones
} from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly",
      examples: ["Authentication", "Security", "Session management"],
      necessary: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Performance Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Analytics", "Page load times", "User behavior"],
      necessary: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "User settings", "Customization"],
      necessary: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign performance",
      examples: ["Ad targeting", "Social media", "Marketing analytics"],
      necessary: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const cookieDetails = [
    {
      name: "_ga",
      purpose: "Google Analytics - Used to distinguish unique users",
      duration: "2 years",
      provider: "Google",
      category: "Performance"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Used to distinguish users",
      duration: "24 hours",
      provider: "Google",
      category: "Performance"
    },
    {
      name: "session_id",
      purpose: "Maintains user session across page visits",
      duration: "Session",
      provider: "Zion Tech Group",
      category: "Essential"
    },
    {
      name: "preferences",
      purpose: "Stores user preferences and settings",
      duration: "1 year",
      provider: "Zion Tech Group",
      category: "Functional"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Security
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Learn how we use cookies and similar technologies to enhance your experience 
                on our website while maintaining your privacy and security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Enhanced Functionality</h3>
                      <p className="text-gray-300">Cookies enable features like user authentication, shopping carts, and personalized content.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Performance Optimization</h3>
                      <p className="text-gray-300">We use cookies to analyze site performance and improve user experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Security & Safety</h3>
                      <p className="text-gray-300">Essential cookies help protect your account and maintain secure sessions.</p>
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
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Cookie className="w-24 h-24 text-cyan-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-3">Cookie Technology</h3>
                    <p className="text-gray-300 max-w-xs mx-auto">
                      Small files that make big improvements to your browsing experience
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We categorize cookies based on their purpose and necessity for website functionality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      {category.necessary && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                          Necessary
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Examples:</h4>
                      {category.examples.map((example) => (
                        <div key={example} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detailed Cookie Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete list of cookies used on our website with detailed information
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Provider</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={cookie.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.duration}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.provider}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cookie.category === 'Essential' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          cookie.category === 'Performance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          cookie.category === 'Functional' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {cookie.category}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  You have full control over which cookies are stored on your device. 
                  Learn how to manage your preferences and opt out of non-essential cookies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                      <p className="text-gray-300">Most browsers allow you to control cookies through their settings menu.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
                      <p className="text-gray-300">Use our cookie consent banner to choose which cookies to accept.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Tools</h3>
                      <p className="text-gray-300">Third-party opt-out tools for advertising and analytics cookies.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Browser Cookie Controls</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</p>
                    <p><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
                    <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                    <p><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Third-Party Opt-Outs</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Google Analytics Opt-out
                    </a>
                    <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Facebook Ad Preferences
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our privacy team is here to help you understand how we use cookies 
                and how to manage your preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Privacy Policy <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CookiesPage;