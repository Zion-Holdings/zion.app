import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function CookiesPage() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly",
      examples: ["Authentication", "Security", "Basic functionality"],
      purpose: "Required for core website operations",
      duration: "Session or 1 year"
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Page views", "User behavior", "Performance metrics"],
      purpose: "Improve website performance and user experience",
      duration: "2 years"
    },
    {
      type: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      examples: ["Language preferences", "User settings", "Customization"],
      purpose: "Provide personalized features and preferences",
      duration: "1 year"
    },
    {
      type: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign performance",
      examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
      purpose: "Deliver relevant content and measure marketing effectiveness",
      duration: "2 years"
    }
  ];

  const cookieManagement = [
    "Browser settings to control cookie preferences",
    "Third-party cookie blocking options",
    "Cookie consent management tools",
    "Opt-out mechanisms for marketing cookies",
    "Regular cookie audits and updates",
    "Transparent cookie usage policies"
  ];

  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to improve your experience. Understand our cookie policy and how to manage your preferences." />
        <meta name="keywords" content="cookie policy, cookies, Zion Tech Group, privacy, data collection" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="How we use cookies to improve your experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Learn how we use cookies to improve your experience and how you can manage your preferences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  What Are Cookies?
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences, 
                  analyzing how you use our site, and personalizing content.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  We use cookies responsibly and only collect the information necessary to improve 
                  our services and provide you with the best possible experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cookie Benefits</h3>
                    </div>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Improved website performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Personalized user experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Better security and authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Analytics and optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Understanding the different categories of cookies and their purposes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={cookie.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {cookie.type}
                    </h3>
                    
                    <p className="text-white/80 mb-4 leading-relaxed">{cookie.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="text-white/70 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-1">Purpose:</h4>
                        <p className="text-white/70 text-sm">{cookie.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Duration:</h4>
                        <p className="text-white/70 text-sm">{cookie.duration}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                You have control over how cookies are used on our website
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Browser Settings</h3>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. 
                    You can typically find these options in your browser's privacy or security settings.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Chrome: Settings → Privacy and security → Cookies</li>
                    <li>• Firefox: Options → Privacy & Security → Cookies</li>
                    <li>• Safari: Preferences → Privacy → Cookies</li>
                    <li>• Edge: Settings → Cookies and site permissions</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    We're committed to transparency and giving you control over your data. 
                    Our cookie management tools make it easy to customize your preferences.
                  </p>
                  <ul className="space-y-2">
                    {cookieManagement.map((item, index) => (
                      <li key={index} className="text-white/70 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                If you have any questions about our cookie policy or how to manage your preferences, 
                our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}