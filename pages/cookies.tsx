import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Eye, Lock, CheckCircle, ArrowRight, Star, Zap, Globe, Users, Heart, Info } from 'lucide-react';

const Cookies: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-amber-900/20 to-orange-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6">
                <Cookie className="w-4 h-4" />
                Cookie Policy
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Understanding how we use cookies and similar technologies to enhance your experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300">
                  Manage Cookies
                </button>
                <button className="px-8 py-4 border border-amber-500/30 text-amber-300 rounded-2xl hover:bg-amber-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Cookies */}
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cookies are small text files that are stored on your device when you visit our website
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Info className="w-12 h-12 text-amber-400" />,
                  title: "Information Storage",
                  description: "Cookies store information about your preferences and interactions with our site",
                  examples: ["Language preferences", "Login status", "Shopping cart items", "Page visits"]
                },
                {
                  icon: <Settings className="w-12 h-12 text-orange-400" />,
                  title: "Site Functionality",
                  description: "Essential cookies that make our website work properly",
                  examples: ["Authentication", "Security features", "Load balancing", "Session management"]
                },
                {
                  icon: <Eye className="w-12 h-12 text-red-400" />,
                  title: "User Experience",
                  description: "Cookies that help us understand how you use our site",
                  examples: ["Analytics data", "Performance metrics", "User behavior", "Site improvements"]
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-amber-500/20 rounded-2xl hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{info.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                  <p className="text-gray-400 mb-6">{info.description}</p>
                  
                  <ul className="space-y-3">
                    {info.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                Cookie Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We use different types of cookies for various purposes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Essential Cookies",
                  description: "These cookies are necessary for the website to function and cannot be switched off",
                  examples: [
                    "Authentication cookies",
                    "Security cookies",
                    "Load balancing cookies",
                    "Session management"
                  ],
                  color: "from-green-500 to-emerald-500",
                  required: true
                },
                {
                  title: "Analytics Cookies",
                  description: "Help us understand how visitors interact with our website",
                  examples: [
                    "Page view tracking",
                    "User behavior analysis",
                    "Performance monitoring",
                    "Site optimization data"
                  ],
                  color: "from-blue-500 to-cyan-500",
                  required: false
                },
                {
                  title: "Functional Cookies",
                  description: "Enable enhanced functionality and personalization",
                  examples: [
                    "Language preferences",
                    "User settings",
                    "Customization options",
                    "Feature preferences"
                  ],
                  color: "from-purple-500 to-pink-500",
                  required: false
                },
                {
                  title: "Marketing Cookies",
                  description: "Used to track visitors across websites for marketing purposes",
                  examples: [
                    "Advertising tracking",
                    "Social media integration",
                    "Retargeting campaigns",
                    "Conversion tracking"
                  ],
                  color: "from-orange-500 to-red-500",
                  required: false
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-amber-500/20 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    {category.required ? (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        Required
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold">
                        Optional
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 mb-6">{category.description}</p>

                  <ul className="space-y-3 mb-6">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        {example}
                      </li>
                    ))}
                  </ul>

                  <button className={`px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Managing Your Cookies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                You have control over which cookies are stored on your device
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Browser Settings",
                  description: "Control cookies through your web browser settings",
                  steps: [
                    "Open browser settings",
                    "Navigate to privacy/security",
                    "Manage cookie preferences",
                    "Save your choices"
                  ],
                  icon: <Settings className="w-12 h-12 text-amber-400" />
                },
                {
                  title: "Cookie Consent",
                  description: "Use our cookie consent manager to control preferences",
                  steps: [
                    "Click cookie settings",
                    "Choose your preferences",
                    "Save your choices",
                    "Update anytime"
                  ],
                  icon: <Shield className="w-12 h-12 text-orange-400" />
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-amber-500/20 rounded-2xl"
                >
                  <div className="mb-6">{method.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Steps:</h4>
                    <ol className="space-y-3">
                      {method.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <span className="w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy & Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Your privacy and security are our top priorities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-8 h-8 text-green-400" />,
                  title: "Data Protection",
                  description: "All cookie data is encrypted and securely stored"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "User Control",
                  description: "You decide which cookies to accept or reject"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Global Standards",
                  description: "Compliant with international privacy regulations"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Transparency",
                  description: "Clear information about how cookies are used"
                },
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Best Practices",
                  description: "Following industry-leading privacy standards"
                },
                {
                  icon: <Zap className="w-8 h-8 text-cyan-400" />,
                  title: "Regular Updates",
                  description: "Continuously improving our privacy practices"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-amber-500/20 rounded-2xl hover:border-amber-500/40 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Support */}
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
              <p className="text-xl text-gray-400 mb-8">
                Our privacy team is here to help with any questions about our cookie policy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2">
                  Contact Privacy Team
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-amber-500/30 text-amber-300 rounded-2xl hover:bg-amber-500/10 transition-all duration-300">
                  Privacy Policy
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cookies;