import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, Lock, Database, Users, Globe } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly",
      examples: ["Authentication", "Security", "Basic functionality"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Page views", "User behavior", "Performance metrics"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "User settings", "Customization"],
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign performance",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
      icon: <Globe className="w-6 h-6" />
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
              initial={{ opacity: 0, y: 20 }}
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
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{type.title}</h3>
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

        {/* Privacy Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Your Privacy Matters</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're committed to protecting your privacy and giving you control over your data
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
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

export default CookiesPage;