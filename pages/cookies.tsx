import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Cookie, Settings, Eye, Lock, 
  CheckCircle, Info, ExternalLink
} from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Authentication", "Security", "Basic functionality"],
      necessary: true,
      color: "from-green-500 to-emerald-500",
      icon: Shield
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Page views", "User behavior", "Performance metrics"],
      necessary: false,
      color: "from-blue-500 to-cyan-500",
      icon: Eye
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language settings", "User preferences", "Form data"],
      necessary: false,
      color: "from-purple-500 to-pink-500",
      icon: Settings
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Ad targeting", "Social media", "Marketing campaigns"],
      necessary: false,
      color: "from-orange-500 to-red-500",
      icon: Cookie
    }
  ];

  const cookieDetails = [
    {
      name: "_ga",
      purpose: "Google Analytics - Used to distinguish unique users",
      duration: "2 years",
      type: "Analytics",
      provider: "Google"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Used to distinguish users",
      duration: "24 hours",
      type: "Analytics",
      provider: "Google"
    },
    {
      name: "_gat",
      purpose: "Google Analytics - Used to throttle request rate",
      duration: "1 minute",
      type: "Analytics",
      provider: "Google"
    },
    {
      name: "session_id",
      purpose: "Maintains user session and authentication",
      duration: "Session",
      type: "Essential",
      provider: "Zion Tech Group"
    },
    {
      name: "user_preferences",
      purpose: "Stores user preferences and settings",
      duration: "1 year",
      type: "Functional",
      provider: "Zion Tech Group"
    },
    {
      name: "cookie_consent",
      purpose: "Remembers user's cookie consent preferences",
      duration: "1 year",
      type: "Essential",
      provider: "Zion Tech Group"
    }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Learn how we use cookies and similar technologies to enhance your experience 
                on our website while respecting your privacy and preferences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#cookie-types"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Learn About Cookies
                </a>
                <a
                  href="#manage-preferences"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Manage Preferences
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Are Cookies?
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Cookies are essential for the proper functioning of many websites and can improve 
                  your browsing experience by making it faster and more convenient.
                </p>
                <div className="flex items-center gap-3 text-cyan-400">
                  <Info className="w-6 h-6" />
                  <span className="font-medium">Cookies are safe and cannot access your personal files</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
                    <Cookie className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Cookie Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Faster page loading times",
                      "Personalized content and recommendations",
                      "Improved security and authentication",
                      "Better user experience and navigation"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section id="cookie-types" className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} p-4 flex-shrink-0`}>
                      <type.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{type.name}</h3>
                        {type.necessary ? (
                          <span className="px-3 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold">
                            Necessary
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30"
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detailed Cookie Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete list of cookies used on our website with their purposes and durations
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left p-4 text-white font-semibold">Purpose</th>
                    <th className="text-left p-4 text-white font-semibold">Duration</th>
                    <th className="text-left p-4 text-white font-semibold">Type</th>
                    <th className="text-left p-4 text-white font-semibold">Provider</th>
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
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 text-cyan-400 font-mono text-sm">{cookie.name}</td>
                      <td className="p-4 text-gray-300">{cookie.purpose}</td>
                      <td className="p-4 text-gray-300">{cookie.duration}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                          cookie.type === 'Essential' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                            : cookie.type === 'Analytics'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : cookie.type === 'Functional'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{cookie.provider}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section id="manage-preferences" className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have full control over which cookies you accept and can change your preferences at any time
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                  <Settings className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Block all cookies",
                    "Block third-party cookies only",
                    "Delete existing cookies",
                    "Set preferences for specific websites"
                  ].map((option, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-400">
                  <strong>Note:</strong> Blocking cookies may affect website functionality
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                  <Lock className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Cookie Consent</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We provide a cookie consent banner that allows you to:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Accept all cookies",
                    "Accept only essential cookies",
                    "Customize your preferences",
                    "Change settings anytime"
                  ].map((option, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-400">
                  <strong>Note:</strong> Essential cookies cannot be disabled as they're required for basic functionality
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Third-Party Cookies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Some cookies are placed by third-party services that appear on our pages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Google Analytics",
                  purpose: "Website analytics and performance monitoring",
                  cookies: ["_ga", "_gid", "_gat"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  name: "Social Media",
                  purpose: "Social media integration and sharing",
                  cookies: ["Various platform cookies"],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Advertising",
                  purpose: "Relevant advertising and marketing",
                  cookies: ["Ad tracking cookies"],
                  color: "from-orange-500 to-red-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${service.color} p-3`}>
                    <ExternalLink className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.purpose}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Cookies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.cookies.map((cookie, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-white/10 text-cyan-300 rounded-full border border-cyan-500/30 font-mono"
                        >
                          {cookie}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                If you have any questions about our cookie policy or how we use cookies, 
                please don't hesitate to contact us.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CookiesPage;