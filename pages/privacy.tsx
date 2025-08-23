import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Database, Globe, 
  UserCheck, FileText, Calendar, ArrowRight,
  CheckCircle, AlertTriangle, Info
} from 'lucide-react';

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'Enterprise-grade encryption and security measures to protect your data',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Privacy Controls',
      description: 'Granular privacy settings and data control options for users',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear information about how we collect, use, and protect your data',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'User Rights',
      description: 'Comprehensive user rights and data access controls',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email, phone number', 'Company and job title', 'Contact preferences'],
      purpose: 'Account management, communication, service delivery',
      retention: 'As long as account is active + 7 years for legal compliance',
      sharing: 'Only with your consent or as required by law'
    },
    {
      category: 'Usage Data',
      examples: ['API calls and usage patterns', 'Service interactions', 'Performance metrics'],
      purpose: 'Service improvement, analytics, troubleshooting',
      retention: '2 years for analytics, 7 years for legal compliance',
      sharing: 'Aggregated and anonymized for internal use only'
    },
    {
      category: 'Technical Data',
      examples: ['IP addresses, device information', 'Browser type and version', 'System logs'],
      purpose: 'Security, fraud prevention, service optimization',
      retention: '90 days for logs, 2 years for security analysis',
      sharing: 'Never shared with third parties'
    },
    {
      category: 'AI Training Data',
      examples: ['Anonymized interaction data', 'Service improvement feedback', 'Performance metrics'],
      purpose: 'AI model training and improvement',
      retention: 'Indefinitely in anonymized form',
      sharing: 'Never shared in identifiable form'
    }
  ];

  const userRights = [
    {
      right: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      right: 'Correct Your Data',
      description: 'Update or correct inaccurate or incomplete information',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      right: 'Delete Your Data',
      description: 'Request deletion of your personal data (with exceptions)',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      right: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      right: 'Restrict Processing',
      description: 'Limit how we use your data in certain circumstances',
      icon: <Lock className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      right: 'Object to Processing',
      description: 'Object to data processing for specific purposes',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const securityMeasures = [
    {
      measure: 'Encryption',
      description: 'End-to-end encryption for data in transit and at rest',
      details: ['AES-256 encryption', 'TLS 1.3 for data transmission', 'Encrypted database storage'],
      icon: <Lock className="w-6 h-6" />
    },
    {
      measure: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls',
      details: ['MFA for all accounts', 'Role-based permissions', 'Regular access reviews'],
      icon: <Shield className="w-6 h-6" />
    },
    {
      measure: 'Data Centers',
      description: 'Secure, redundant data centers with physical security',
      details: ['SOC 2 Type II compliance', '24/7 physical security', 'Environmental controls'],
      icon: <Database className="w-6 h-6" />
    },
    {
      measure: 'Monitoring',
      description: 'Continuous security monitoring and threat detection',
      details: ['Real-time threat detection', 'Automated incident response', 'Security audits'],
      icon: <Eye className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Your privacy is fundamental to us. Learn how we protect your data and respect your rights 
              while delivering cutting-edge AI consciousness and quantum computing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#data-collection"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Privacy Commitment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring transparency in all our data practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section id="data-collection" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Data Collection & Usage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent information about what data we collect and how we use it
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {category.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Purpose:</h4>
                        <p className="text-sm text-gray-300">{category.purpose}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Retention:</h4>
                        <p className="text-sm text-gray-300">{category.retention}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Sharing:</h4>
                        <p className="text-sm text-gray-300">{category.sharing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive rights and controls over your personal data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${right.color} flex items-center justify-center`}>
                    {right.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {right.right}
                  </h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Security & Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security measures to protect your data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.measure}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      {measure.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {measure.measure}
                    </h3>
                    <p className="text-gray-300 mb-4">{measure.description}</p>
                    <ul className="space-y-2">
                      {measure.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Policy Details
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important information about our privacy practices and policies
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Data Sharing & Third Parties</h3>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal data to third parties. We may share data only in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and safety</li>
                <li>• With trusted service providers under strict data protection agreements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">International Data Transfers</h3>
              <p className="text-gray-300 mb-4">
                Your data may be processed in countries other than your own. We ensure all data transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Data may be processed in: United States, European Union, United Kingdom, Japan, Australia</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Cookies & Tracking</h3>
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Essential Cookies:</h4>
                  <p className="text-gray-300">Required for basic site functionality</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Analytics Cookies:</h4>
                  <p className="text-gray-300">Help us improve our services</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Policy Updates</h3>
              <p className="text-gray-300 mb-4">
                We may update this privacy policy periodically to reflect changes in our practices or applicable laws. We will notify you of any material changes through our website or email.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our privacy team is here to help you understand your rights and our data practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Privacy Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/support"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Support
              </a>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Privacy Updates</h3>
              <p className="text-gray-300 mb-4">
                Stay informed about privacy policy changes and data protection updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

 