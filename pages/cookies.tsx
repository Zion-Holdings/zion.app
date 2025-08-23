import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Database, Bell, Lock, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security',
      examples: ['Authentication', 'Security', 'Session management'],
      necessary: true,
      icon: <Shield className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Analytics', 'Performance monitoring', 'Error tracking'],
      necessary: false,
      icon: <Eye className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: ['Language preferences', 'User settings', 'Feature preferences'],
      necessary: false,
      icon: <Settings className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign performance',
      examples: ['Ad targeting', 'Campaign analytics', 'Social media integration'],
      necessary: false,
      icon: <Bell className="w-6 h-6 text-yellow-400" />
    }
  ];

  const cookieDetails = [
    {
      name: 'session_id',
      purpose: 'Maintains your session and authentication state',
      duration: 'Session',
      type: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: 'csrf_token',
      purpose: 'Protects against cross-site request forgery attacks',
      duration: 'Session',
      type: 'Essential',
      provider: 'Zion Tech Group'
    },
    {
      name: '_ga',
      purpose: 'Google Analytics cookie for website usage analytics',
      duration: '2 years',
      type: 'Performance',
      provider: 'Google'
    },
    {
      name: '_gid',
      purpose: 'Google Analytics cookie for user identification',
      duration: '24 hours',
      type: 'Performance',
      provider: 'Google'
    },
    {
      name: 'language_pref',
      purpose: 'Stores your preferred language setting',
      duration: '1 year',
      type: 'Functional',
      provider: 'Zion Tech Group'
    },
    {
      name: 'theme_pref',
      purpose: 'Remembers your chosen theme preference',
      duration: '1 year',
      type: 'Functional',
      provider: 'Zion Tech Group'
    }
  ];

  const cookieManagement = [
    {
      title: 'Browser Settings',
      description: 'Control cookies through your web browser preferences',
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      instructions: 'Most browsers allow you to view, manage, and delete cookies through their settings menu.'
    },
    {
      title: 'Cookie Consent Manager',
      description: 'Use our built-in cookie preference center',
      icon: <Cookie className="w-6 h-6 text-purple-400" />,
      instructions: 'Access our cookie settings panel to customize your preferences at any time.'
    },
    {
      title: 'Third-Party Opt-Outs',
      description: 'Opt out of specific third-party cookie tracking',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      instructions: 'Many third-party services provide opt-out mechanisms for their tracking cookies.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Cookie className="w-4 h-4 mr-2" />
                Cookie Policy
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Learn about how we use cookies and similar technologies to enhance 
                your experience on our website.
              </p>
              
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Small Text Files</h3>
                      <p className="text-gray-300">Cookies are tiny files that help websites remember information about your visit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Stored on Your Device</h3>
                      <p className="text-gray-300">They are saved in your browser and can be accessed by our website on future visits.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Enhance Experience</h3>
                      <p className="text-gray-300">Cookies help us provide a better, more personalized experience for you.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-purple-400/30">
                  <Cookie className="w-32 h-32 text-purple-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-20 px-4 bg-white/5">
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
                We use different types of cookies for various purposes to improve your experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {type.icon}
                      <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      type.necessary 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {type.necessary ? 'Necessary' : 'Optional'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                    <div className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Section */}
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
                Specific details about the cookies we use and their purposes.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Cookie Name</th>
                    <th className="text-left p-6 text-white font-semibold">Purpose</th>
                    <th className="text-left p-6 text-white font-semibold">Duration</th>
                    <th className="text-left p-6 text-white font-semibold">Type</th>
                    <th className="text-left p-6 text-white font-semibold">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="p-6 text-purple-300 font-mono text-sm">{cookie.name}</td>
                      <td className="p-6 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="p-6 text-gray-300 text-sm">{cookie.duration}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          cookie.type === 'Essential' 
                            ? 'bg-green-500/20 text-green-300' 
                            : cookie.type === 'Performance'
                            ? 'bg-blue-500/20 text-blue-300'
                            : cookie.type === 'Functional'
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="p-6 text-gray-300 text-sm">{cookie.provider}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Management Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have control over which cookies are stored on your device.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cookieManagement.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <p className="text-gray-400 text-sm">{method.instructions}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Important Information
              </h2>
              <p className="text-lg text-gray-300">
                Key points about our cookie usage and your choices.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Essential Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Essential cookies are necessary for the website to function properly. These cookies cannot be disabled as they are required for basic functionality, security, and performance.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Your Choices</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You can choose to accept or decline non-essential cookies. Declining these cookies may affect the functionality and user experience of our website, but you will still be able to access our core services.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <Lock className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We are committed to protecting your privacy. All cookie data is processed in accordance with our Privacy Policy and applicable data protection laws. We do not use cookies to collect personally identifiable information without your consent.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                If you have questions about our cookie policy or need help managing your preferences, 
                please contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Cookie Settings
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;