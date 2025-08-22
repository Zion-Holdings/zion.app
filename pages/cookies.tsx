import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Settings, Eye, Lock, Database, Users, Info, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Cookies() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Understanding how we use cookies and similar technologies to enhance your experience 
                on our website while maintaining your privacy and security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  These files are completely safe and cannot access any personal information stored on your device. 
                  They only contain anonymous data that helps us improve our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">Cookie Types We Use</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Essential Cookies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Performance Cookies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Functional Cookies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Analytics Cookies</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Cookie Categories</h2>
              <p className="text-xl text-gray-300">Understanding the different types of cookies we use</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-cyan-400" />,
                  title: "Essential Cookies",
                  description: "Required for basic website functionality and security. These cannot be disabled.",
                  examples: ["Authentication", "Security", "Session management"],
                  color: "text-cyan-400",
                  bgColor: "bg-cyan-400/10"
                },
                {
                  icon: <Settings className="w-12 h-12 text-blue-400" />,
                  title: "Functional Cookies",
                  description: "Remember your preferences and settings to enhance your experience.",
                  examples: ["Language settings", "Theme preferences", "Form data"],
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10"
                },
                {
                  icon: <Database className="w-12 h-12 text-purple-400" />,
                  title: "Performance Cookies",
                  description: "Help us understand how visitors interact with our website.",
                  examples: ["Page load times", "Error tracking", "User behavior"],
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10"
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Analytics Cookies",
                  description: "Provide insights into website usage and performance metrics.",
                  examples: ["Traffic analysis", "Conversion tracking", "A/B testing"],
                  color: "text-green-400",
                  bgColor: "bg-green-400/10"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`${category.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${category.color} mb-3`}>{category.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-xl text-gray-300">Specific ways cookies enhance your experience</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Website Functionality",
                  description: "Cookies enable essential features like user authentication, shopping carts, and form submissions.",
                  icon: <Settings className="w-8 h-8 text-cyan-400" />
                },
                {
                  title: "Performance Optimization",
                  description: "We analyze cookie data to improve page load times and identify performance bottlenecks.",
                  icon: <Zap className="w-8 h-8 text-blue-400" />
                },
                {
                  title: "Personalization",
                  description: "Cookies help us remember your preferences and provide tailored content and recommendations.",
                  icon: <Users className="w-8 h-8 text-purple-400" />
                },
                {
                  title: "Security & Fraud Prevention",
                  description: "Essential cookies help protect against unauthorized access and malicious activities.",
                  icon: <Lock className="w-8 h-8 text-green-400" />
                }
              ].map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {use.icon}
                    <h3 className="text-xl font-bold text-white">{use.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{use.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">Managing Your Cookie Preferences</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  You have full control over your cookie preferences. You can modify your browser settings 
                  to accept or reject cookies, or delete existing cookies at any time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Browser settings to control cookie behavior</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Opt-out options for analytics and marketing cookies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Clear cookies and browsing data</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">Browser Cookie Settings</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Chrome</span>
                    <span className="text-cyan-400">Settings &gt; Privacy &gt; Cookies</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Firefox</span>
                    <span className="text-cyan-400">Options &gt; Privacy &gt; Cookies</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Safari</span>
                    <span className="text-cyan-400">Preferences &gt; Privacy &gt; Cookies</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Edge</span>
                    <span className="text-cyan-400">Settings &gt; Cookies &gt; Site permissions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-xl text-gray-300">Understanding external services and their cookie usage</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  service: "Google Analytics",
                  purpose: "Website analytics and performance monitoring",
                  data: "Anonymous usage statistics, page views, user behavior",
                  control: "Can be disabled via browser settings or opt-out tools"
                },
                {
                  service: "Social Media Platforms",
                  purpose: "Social sharing and integration features",
                  data: "Social media preferences, sharing behavior",
                  control: "Controlled through social media platform settings"
                },
                {
                  service: "Payment Processors",
                  purpose: "Secure payment processing and fraud prevention",
                  data: "Payment verification, security tokens",
                  control: "Essential for transaction security"
                },
                {
                  service: "Content Delivery Networks",
                  purpose: "Fast content delivery and performance optimization",
                  data: "Geographic location, content preferences",
                  control: "Can impact website performance if disabled"
                }
              ].map((thirdParty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{thirdParty.service}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-cyan-400 font-medium">Purpose: </span>
                      <span className="text-gray-300">{thirdParty.purpose}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-medium">Data Collected: </span>
                      <span className="text-gray-300">{thirdParty.data}</span>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-medium">Your Control: </span>
                      <span className="text-gray-300">{thirdParty.control}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Updates and Contact */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <div className="flex justify-center mb-6">
                <Info className="w-16 h-16 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Policy Updates</h2>
              <p className="text-xl text-gray-300 mb-8">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 mb-8">
                <p className="text-gray-300">
                  <strong>Last Updated:</strong> January 15, 2025
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}