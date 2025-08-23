import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      icon: <FileText className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Zion Tech Group's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.`,
      icon: <Lock className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`,
      icon: <Users className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`,
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`,
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    },
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Scale className="w-4 h-4 mr-2" />
                Legal Information
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms carefully before using our services. 
                By using our website and services, you agree to these terms.
              </p>
              
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Notices Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Important Notices
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Please pay special attention to these important notices regarding our services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {importantNotices.map((notice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${
                    notice.type === 'warning' 
                      ? 'bg-yellow-500/10 border-yellow-400/30' 
                      : 'bg-blue-500/10 border-blue-400/30'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`mt-1 ${
                      notice.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                    }`}>
                      {notice.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-2 ${
                        notice.type === 'warning' ? 'text-yellow-300' : 'text-blue-300'
                      }`}>
                        {notice.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{notice.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Terms and Conditions
              </h2>
              <p className="text-lg text-gray-300">
                Detailed terms governing the use of our services and website.
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="mt-1">{section.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Additional Terms
              </h2>
              <p className="text-lg text-gray-300">
                Additional terms that apply to specific services or situations.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability to you for any claims arising from the use of our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Governing Law</h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of the United States.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Changes to Terms</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Download Terms PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;