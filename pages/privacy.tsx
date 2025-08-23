import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Database, Users, Globe, Calendar, 
  ArrowRight, CheckCircle, AlertTriangle, FileText, Settings,
  Mail, Phone, MapPin, Clock, Shield as ShieldIcon
} from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "2025-01-15";

  const dataCategories = [
    {
      title: "Personal Information",
      description: "Name, email address, phone number, and company information",
      examples: ["Email addresses", "Phone numbers", "Company names", "Job titles"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Technical Data",
      description: "Information about your device and how you use our services",
      examples: ["IP addresses", "Browser type", "Device information", "Usage analytics"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Usage Information",
      description: "How you interact with our platforms and services",
      examples: ["Page views", "Feature usage", "Search queries", "Service interactions"],
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Communication Data",
      description: "Information from your interactions with our team",
      examples: ["Support tickets", "Chat conversations", "Email communications", "Feedback"],
      icon: <Mail className="w-6 h-6" />
    }
  ];

  const dataUses = [
    {
      title: "Service Delivery",
      description: "Provide and maintain our technology platforms and services",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Communication",
      description: "Respond to inquiries and provide customer support",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Improvement",
      description: "Enhance our services based on usage patterns and feedback",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: "Security",
      description: "Protect against fraud and ensure platform security",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const userRights = [
    {
      title: "Access",
      description: "Request a copy of your personal data",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Correction",
      description: "Update or correct inaccurate information",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Deletion",
      description: "Request deletion of your personal data",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Portability",
      description: "Receive your data in a portable format",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Objection",
      description: "Object to certain types of data processing",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Restriction",
      description: "Limit how we process your data",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const securityMeasures = [
    {
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Access Controls",
      description: "Strict access controls and authentication mechanisms protect your data",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Regular Audits",
      description: "Comprehensive security audits and penetration testing",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Employee Training",
      description: "Regular security training for all employees handling data",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy."
      keywords="privacy policy, data protection, GDPR, CCPA, personal data, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-cyan-400 mb-6">
                <Shield className="w-20 h-20 mx-auto" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Your privacy is fundamental to us. Learn how we protect and manage your personal information 
                with transparency and care.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300">Last Updated: {new Date(lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300">Global Standards</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-cyan-400 mb-4">
                    <Shield className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
                  <p className="text-gray-300 text-sm">
                    We implement industry-leading security measures to protect your information
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 mb-4">
                    <Eye className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                  <p className="text-gray-300 text-sm">
                    Clear information about what data we collect and how we use it
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 mb-4">
                    <Users className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Your Rights</h3>
                  <p className="text-gray-300 text-sm">
                    Full control over your personal data with clear rights and options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Zion Tech Group, we believe that privacy is a fundamental human right. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Scope</h3>
              <p className="text-gray-300 mb-4">
                This Privacy Policy applies to all services provided by Zion Tech Group, including:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Our website and online platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>AI consciousness and quantum computing services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Space technology and cybersecurity solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Customer support and communication channels</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the information necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                >
                  <div className="text-cyan-400 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Use Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use your information responsibly to provide and improve our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                >
                  <div className="text-blue-400 mb-4">
                    {use.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {use.title}
                  </h3>
                  <p className="text-gray-300">
                    {use.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Sharing & Disclosure
              </h2>
              <p className="text-xl text-gray-300">
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Limited Sharing</h3>
              <p className="text-gray-300 mb-6">
                We may share your information only in these specific circumstances:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Service Providers:</strong> Trusted partners who help us deliver our services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Business Transfers:</strong> In connection with a merger or acquisition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>With Your Consent:</strong> When you explicitly authorize us to do so</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Rights & Choices
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have full control over your personal data. Exercise these rights anytime.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4">
                    {right.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {right.title}
                  </h3>
                  <p className="text-gray-300">
                    {right.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <span>Exercise Your Rights</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to safeguard your information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                >
                  <div className="text-green-400 mb-4">
                    {measure.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {measure.title}
                  </h3>
                  <p className="text-gray-300">
                    {measure.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions & Updates
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about this Privacy Policy? We're here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Policy Updates</h3>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <Clock className="w-5 h-5" />
                  <span>Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Privacy Team</span>
                </a>
                <a
                  href="/contact"
                  className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  General Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivacyPage;

 