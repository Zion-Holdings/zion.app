import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, Shield, CheckCircle, Users } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Auditory Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent design, and simplified interfaces.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const complianceStandards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'International Accessibility Standards',
    'Mobile Accessibility Guidelines',
    'Voice Assistant Compatibility'
  ];

  const toolsAndFeatures = [
    'Screen Reader Optimization',
    'High Contrast Mode',
    'Text Size Adjustment',
    'Keyboard Navigation',
    'Focus Indicators',
    'Alternative Text for Images',
    'Semantic HTML Structure',
    'ARIA Labels and Roles'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
                  <AccessibilityIcon className="w-4 h-4" />
                  <span>Accessibility Commitment</span>
                </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Accessibility
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                We believe technology should be accessible to everyone. Our commitment to digital 
                accessibility ensures that all users can experience our innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We've implemented a wide range of accessibility features to ensure 
                our platform is usable by people with diverse abilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-30 h-full transition-all duration-300 group-hover:scale-105 group-hover:bg-opacity-20`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Accessibility Compliance
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Our platform meets and exceeds international accessibility standards, 
                  ensuring compliance with major accessibility guidelines and regulations.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We continuously test and improve our accessibility features to provide 
                  the best possible experience for all users.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Standards Compliance</h3>
                    <ul className="space-y-3 text-left">
                      {complianceStandards.map((standard, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm">{standard}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools and Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Accessibility Tools & Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the comprehensive set of tools and features we've implemented 
                to make our platform accessible to everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsAndFeatures.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Experience Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Inclusive User Experience
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We design with accessibility in mind from the ground up, ensuring 
                that every user can navigate, understand, and interact with our platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Universal Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our platform is designed to be usable by people with the widest 
                  range of abilities, without the need for adaptation or specialized design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AccessibilityIcon className="w-10 h-10 text-white" />
                  </div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Improvement</h3>
                <p className="text-gray-300 leading-relaxed">
                  We regularly test our platform with accessibility tools and gather 
                  feedback from users to continuously improve our accessibility features.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our accessibility features undergo rigorous testing to ensure they 
                  meet the highest standards of usability and compliance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Help Us Improve
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We value your feedback on accessibility. If you encounter any accessibility 
                issues or have suggestions for improvement, please let us know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  Report Accessibility Issue
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
                  Provide Feedback
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}