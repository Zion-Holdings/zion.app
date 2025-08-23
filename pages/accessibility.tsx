import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Eye, Ear, Hand, Brain, CheckCircle, Users, Globe, Heart } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const accessibilityFeatures = [
    {
      title: "Screen Reader Support",
      description: "Full compatibility with screen readers and assistive technologies",
      icon: <Ear className="w-8 h-8" />,
      features: ["ARIA labels", "Semantic HTML", "Screen reader navigation", "Alternative text"]
    },
    {
      title: "Keyboard Navigation",
      description: "Complete keyboard accessibility for all interactive elements",
      icon: <Hand className="w-8 h-8" />,
      features: ["Tab navigation", "Keyboard shortcuts", "Focus indicators", "Skip links"]
    },
    {
      title: "Visual Accessibility",
      description: "High contrast and customizable visual options",
      icon: <Eye className="w-8 h-8" />,
      features: ["High contrast mode", "Font size options", "Color customization", "Visual indicators"]
    },
    {
      title: "Cognitive Support",
      description: "Clear navigation and simplified user experience",
      icon: <Brain className="w-8 h-8" />,
      features: ["Simple navigation", "Clear language", "Consistent layout", "Error prevention"]
    }
  ];

  const complianceStandards = [
    {
      standard: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA compliance",
      status: "Compliant"
    },
    {
      standard: "Section 508",
      description: "Federal accessibility requirements for electronic and information technology",
      status: "Compliant"
    },
    {
      standard: "ADA",
      description: "Americans with Disabilities Act compliance for digital accessibility",
      status: "Compliant"
    },
    {
      standard: "EN 301 549",
      description: "European accessibility requirements for ICT products and services",
      status: "Compliant"
    }
  ];

  const accessibilityTools = [
    {
      title: "Accessibility Checker",
      description: "Built-in tools to identify and fix accessibility issues",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Voice Navigation",
      description: "Voice commands for hands-free website navigation",
      icon: <Ear className="w-6 h-6" />
    },
    {
      title: "Text-to-Speech",
      description: "Built-in text-to-speech functionality for content",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Accessibility Settings",
      description: "Customizable accessibility preferences and options",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Accessibility - Zion Tech Group"
      description="Zion Tech Group is committed to making our website accessible to all users. Learn about our accessibility features and compliance standards."
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
                Accessibility
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We're committed to making our website accessible to all users. Our platform is designed 
                with inclusivity in mind, ensuring everyone can access our revolutionary technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Commitment Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6">Our Accessibility Commitment</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Zion Tech Group, we believe that technology should be accessible to everyone. 
                  We're committed to creating an inclusive digital experience that works for users 
                  of all abilities and needs.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our accessibility efforts are ongoing, and we continuously work to improve the 
                  user experience for all visitors to our website. We welcome feedback and suggestions 
                  to help us make our platform more accessible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
              >
                <div className="text-center">
                  <Heart className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Inclusive by Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    "We believe that accessibility is not just a feature—it's a fundamental principle 
                    that guides everything we do. Technology should empower everyone, regardless of 
                    their abilities or how they interact with digital content."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accessibility Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Accessibility Features</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive accessibility features designed to support users with diverse needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Accessibility Compliance</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meeting and exceeding international accessibility standards and guidelines
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{standard.standard}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Accessibility Tools</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built-in tools and features to enhance your browsing experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Tips Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Accessibility Tips</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Helpful tips to make the most of our accessibility features
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-6">For Screen Reader Users</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>Use heading navigation to quickly move between sections</div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>All interactive elements have descriptive labels</div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>Skip links are available for main content navigation</div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-6">For Keyboard Users</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>Use Tab to navigate between interactive elements</div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>Enter or Space to activate buttons and links</div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>Arrow keys for dropdown menus and sliders</div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Help Us Improve</h2>
              <p className="text-xl text-gray-400 mb-8">
                We're committed to continuously improving our accessibility. Your feedback helps us 
                create a better experience for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Report Accessibility Issues
                </a>
                <a
                  href="mailto:accessibility@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Email Accessibility Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AccessibilityPage;