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
      title: "High Contrast Mode",
      description: "Enhanced visual contrast for better readability",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Font Size Controls",
      description: "Adjustable text sizing for comfortable reading",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const accessibilityCommitment = [
    {
      title: "Continuous Improvement",
      description: "Regular accessibility audits and updates",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "User Testing",
      description: "Testing with users who have disabilities",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Standards Compliance",
      description: "Adherence to international accessibility standards",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Community Focus",
      description: "Building for all users, regardless of ability",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Accessibility First
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We believe technology should be accessible to everyone. Our commitment to accessibility 
                ensures that all users can experience the full potential of our platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our platform is designed with accessibility in mind from the ground up
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accessibility Compliance
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Meeting and exceeding international accessibility standards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{standard.standard}</h3>
                  <p className="text-gray-300 mb-3">{standard.description}</p>
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessibility Tools */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built-in Accessibility Tools
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Tools and features that make our platform more accessible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Building a more inclusive digital future for everyone
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityCommitment.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">{commitment.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{commitment.title}</h3>
                  <p className="text-gray-300">{commitment.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Have Accessibility Feedback?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're committed to continuous improvement. If you have suggestions or encounter 
                accessibility issues, please let us know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Report an Issue
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium border border-white/20 transition-colors">
                  Accessibility Survey
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
