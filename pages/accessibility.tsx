import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Accessibility, Eye, Ear, Hand, Brain, CheckCircle, ArrowRight, Star, Zap, Globe, Shield, Users, Heart } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-teal-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6">
                <Accessibility className="w-4 h-4" />
                Digital Accessibility
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Accessibility
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Committed to making our technology accessible to everyone, regardless of abilities or disabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300">
                  Accessibility Report
                </button>
                <button className="px-8 py-4 border border-teal-500/30 text-teal-300 rounded-2xl hover:bg-teal-500/10 transition-all duration-300">
                  Report Issues
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Commitment */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment goes beyond compliance to create truly inclusive experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="w-12 h-12 text-teal-400" />,
                  title: "Visual Accessibility",
                  description: "High contrast modes, screen reader support, and scalable text options",
                  features: ["Screen reader compatibility", "High contrast themes", "Text scaling", "Color blind friendly"]
                },
                {
                  icon: <Ear className="w-12 h-12 text-cyan-400" />,
                  title: "Auditory Accessibility",
                  description: "Captions, transcripts, and audio descriptions for all multimedia content",
                  features: ["Closed captions", "Audio descriptions", "Transcripts", "Visual alerts"]
                },
                {
                  icon: <Hand className="w-12 h-12 text-blue-400" />,
                  title: "Motor Accessibility",
                  description: "Keyboard navigation, voice control, and alternative input methods",
                  features: ["Keyboard navigation", "Voice control", "Alternative inputs", "Gesture support"]
                },
                {
                  icon: <Brain className="w-12 h-12 text-purple-400" />,
                  title: "Cognitive Accessibility",
                  description: "Clear navigation, simple language, and consistent design patterns",
                  features: ["Clear navigation", "Simple language", "Consistent design", "Error prevention"]
                },
                {
                  icon: <Shield className="w-12 h-12 text-emerald-400" />,
                  title: "Privacy & Security",
                  description: "Secure accessibility features that protect user privacy and data",
                  features: ["Data protection", "Privacy controls", "Secure access", "User control"]
                },
                {
                  icon: <Users className="w-12 h-12 text-pink-400" />,
                  title: "Inclusive Design",
                  description: "Designing from the start with accessibility in mind for all users",
                  features: ["Universal design", "User testing", "Feedback loops", "Continuous improvement"]
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-teal-500/20 rounded-2xl hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We adhere to international accessibility standards and continuously work to exceed them
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "WCAG 2.1 AA",
                  description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
                  status: "Fully Compliant",
                  features: [
                    "Perceivable content",
                    "Operable interface",
                    "Understandable information",
                    "Robust technology"
                  ],
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  title: "Section 508",
                  description: "Federal accessibility requirements for electronic and information technology",
                  status: "Fully Compliant",
                  features: [
                    "Federal standards",
                    "Government compliance",
                    "Public sector access",
                    "Equal opportunity"
                  ],
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-teal-500/20 rounded-2xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{standard.title}</h3>
                    <p className="text-gray-400 mb-4">{standard.description}</p>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {standard.status}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {standard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`px-6 py-3 bg-gradient-to-r ${standard.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the tools and features that make our technology accessible to everyone
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-teal-400" />,
                  title: "High Contrast Mode",
                  description: "Enhanced visibility with high contrast color schemes"
                },
                {
                  icon: <Zap className="w-8 h-8 text-cyan-400" />,
                  title: "Keyboard Navigation",
                  description: "Full functionality using only keyboard controls"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Screen Reader Support",
                  description: "Compatible with all major screen readers"
                },
                {
                  icon: <Heart className="w-8 h-8 text-purple-400" />,
                  title: "Voice Control",
                  description: "Navigate and control using voice commands"
                },
                {
                  icon: <Eye className="w-8 h-8 text-emerald-400" />,
                  title: "Text Scaling",
                  description: "Adjustable text size up to 200%"
                },
                {
                  icon: <Ear className="w-8 h-8 text-pink-400" />,
                  title: "Audio Descriptions",
                  description: "Narrated descriptions of visual content"
                },
                {
                  icon: <Hand className="w-8 h-8 text-yellow-400" />,
                  title: "Alternative Input",
                  description: "Support for various input devices"
                },
                {
                  icon: <Brain className="w-8 h-8 text-orange-400" />,
                  title: "Cognitive Support",
                  description: "Clear navigation and simple language"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-teal-500/20 rounded-2xl hover:border-teal-500/40 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Validation */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Testing & Validation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our accessibility is continuously tested and validated using multiple methods
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Testing",
                  description: "Continuous automated accessibility testing using industry-leading tools",
                  tools: ["axe-core", "WAVE", "Lighthouse", "Accessibility Insights"],
                  icon: <Zap className="w-12 h-12 text-teal-400" />
                },
                {
                  title: "Manual Testing",
                  description: "Regular manual testing by accessibility experts and users with disabilities",
                  tools: ["Screen readers", "Keyboard navigation", "Color contrast", "User testing"],
                  icon: <Users className="w-12 h-12 text-cyan-400" />
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-teal-500/20 rounded-2xl"
                >
                  <div className="mb-6">{method.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tools & Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Issues */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Report Accessibility Issues
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Help us improve by reporting any accessibility issues you encounter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-2">
                  Report Issue
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-teal-500/30 text-teal-300 rounded-2xl hover:bg-teal-500/10 transition-all duration-300">
                  Accessibility Feedback
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AccessibilityPage;