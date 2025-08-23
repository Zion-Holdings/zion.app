import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, 
  CheckCircle, Settings, Info, ArrowRight,
  Monitor, Smartphone, Tablet, Globe
} from 'lucide-react';
import Link from 'next/link';

const Accessibility: React.FC = () => {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility',
      features: ['High contrast themes', 'Font size adjustment', 'Screen reader support', 'Alt text for images']
    },
    {
      icon: <Ear className="w-6 h-6" />,
      title: 'Auditory Accessibility',
      description: 'Captions, transcripts, and audio alternatives for multimedia content',
      features: ['Video captions', 'Audio transcripts', 'Visual alerts', 'Volume controls']
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technology support',
      features: ['Keyboard navigation', 'Voice commands', 'Large click targets', 'Customizable timeouts']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent design, and simplified interfaces',
      features: ['Clear navigation', 'Consistent layout', 'Simple language', 'Logical flow']
    }
  ];

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'Compatible with JAWS, NVDA, VoiceOver, and other screen readers',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: 'Voice Control',
      description: 'Support for voice recognition software and voice commands',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: 'Switch Devices',
      description: 'Compatible with switch navigation and alternative input devices',
      icon: <Tablet className="w-6 h-6" />
    },
    {
      name: 'Magnification',
      description: 'Support for screen magnification software and zoom features',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1',
      level: 'AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Compliant'
    },
    {
      standard: 'Section 508',
      level: 'Federal',
      description: 'Federal accessibility requirements for electronic and information technology',
      status: 'Compliant'
    },
    {
      standard: 'ADA Title III',
      level: 'Legal',
      description: 'Americans with Disabilities Act requirements for public accommodations',
      status: 'Compliant'
    },
    {
      standard: 'EN 301 549',
      level: 'European',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Compliant'
    }
  ];

  return (
    <Layout
      title="Accessibility - Zion Tech Group"
      description="Zion Tech Group is committed to web accessibility. Learn about our accessibility features, compliance standards, and commitment to inclusive design."
      keywords="accessibility, web accessibility, WCAG, inclusive design, disability support, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <AccessibilityIcon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Accessibility
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Committed to inclusive design and equal access for all users
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we believe that technology should be accessible to everyone. 
                We're committed to creating inclusive digital experiences that work for users of all abilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Our Accessibility Commitment
              </h2>
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20">
                <p className="text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl mx-auto">
                  "We are committed to ensuring that our website and digital services are accessible 
                  to people with disabilities. We strive to meet or exceed accessibility standards 
                  and continuously work to improve the user experience for all visitors."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our website includes comprehensive accessibility features to support users with various needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item) => (
                      <li key={item} className="text-sm text-gray-300 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Assistive Technology Support */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Assistive Technology Support
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our website is designed to work seamlessly with various assistive technologies
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assistiveTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Accessibility Compliance
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We maintain compliance with international accessibility standards and regulations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{standard.standard}</h3>
                    <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1 rounded-full">
                      {standard.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{standard.level}</p>
                  <p className="text-gray-300">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing and Monitoring */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Testing and Monitoring
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We continuously test and monitor our accessibility compliance
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Automated Testing</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Regular Scans</h4>
                      <p className="text-gray-300 text-sm">
                        Automated accessibility testing tools run continuously
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Issue Detection</h4>
                      <p className="text-gray-300 text-sm">
                        Automatic identification of accessibility violations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Performance Metrics</h4>
                      <p className="text-gray-300 text-sm">
                        Tracking accessibility scores and improvements
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Manual Testing</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">User Testing</h4>
                      <p className="text-gray-300 text-sm">
                        Testing with users who rely on assistive technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Expert Review</h4>
                      <p className="text-gray-300 text-sm">
                        Accessibility experts review our implementations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Continuous Improvement</h4>
                      <p className="text-gray-300 text-sm">
                        Regular updates based on testing results
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feedback and Support */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Feedback and Support
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We welcome feedback on accessibility and are here to help
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Report Issues</h3>
                <p className="text-gray-300 mb-6">
                  If you encounter accessibility issues on our website, please let us know. 
                  Your feedback helps us improve our services for all users.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <strong>Email:</strong> accessibility@ziontechgroup.com
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> +1 302 464 0950
                  </p>
                  <p className="text-gray-300">
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-3xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Accessibility Support</h3>
                <p className="text-gray-300 mb-6">
                  Need help accessing our website or services? Our accessibility support team 
                  is here to assist you.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Alternative formats available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Personalized assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Training and guidance</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Help Us Improve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Your feedback is essential to our continuous improvement in accessibility
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:accessibility@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Report Accessibility Issue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accessibility;