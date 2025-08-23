import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  },
  {
    title: 'Use License',
    icon: <Scale className="w-6 h-6 text-blue-400" />,
    content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.'
  },
  {
    title: 'Disclaimer',
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
    content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.'
  },
  {
    title: 'Limitations',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  }
];

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service, including usage policies, user agreements, and legal conditions for accessing our technology services."
        keywords={["terms of service", "user agreement", "legal terms", "conditions of use", "service agreement", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms and conditions carefully before using our services.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Terms Overview</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                These Terms of Service govern your use of Zion Tech Group's website and services. 
                By using our services, you agree to these terms.
              </p>
            </motion.div>

            {/* Key Terms Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <p className="text-gray-300">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Detailed Terms and Conditions</h2>
                <p className="text-xl text-gray-400">
                  Complete terms governing your use of our services.
                </p>
              </div>

              {/* Section 1: Definitions */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Definitions</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    The following terms shall have the meanings set forth below:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>"Company"</strong> refers to Zion Tech Group</li>
                    <li><strong>"Services"</strong> refers to our website, platforms, and technology solutions</li>
                    <li><strong>"User"</strong> refers to any individual or entity using our services</li>
                    <li><strong>"Content"</strong> refers to all text, data, information, software, and other materials</li>
                    <li><strong>"Agreement"</strong> refers to these Terms of Service</li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Acceptance */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2. Acceptance of Terms</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    By accessing, browsing, or using our services, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to these terms, please do not use our services. We reserve the 
                    right to modify these terms at any time, and such modifications will be effective 
                    immediately upon posting.
                  </p>
                </div>
              </div>

              {/* Section 3: Use of Services */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">3. Use of Services</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Permitted Use</h4>
                  <p>
                    You may use our services for lawful purposes only. You agree not to use the services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>In any way that violates applicable laws or regulations</li>
                    <li>To transmit or distribute viruses, malware, or other harmful code</li>
                    <li>To interfere with or disrupt the integrity or performance of our services</li>
                    <li>To attempt to gain unauthorized access to our systems</li>
                    <li>To impersonate any person or entity or misrepresent your affiliation</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-white">Account Security</h4>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account.
                  </p>
                </div>
              </div>

              {/* Section 4: Intellectual Property */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">4. Intellectual Property Rights</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    All content, features, and functionality of our services are owned by Zion Tech Group 
                    and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <h4 className="text-lg font-semibold text-white">License Grant</h4>
                  <p>
                    Subject to these terms, we grant you a limited, non-exclusive, non-transferable license 
                    to access and use our services for your personal or business use.
                  </p>
                  <h4 className="text-lg font-semibold text-white">Restrictions</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You may not reproduce, distribute, or create derivative works</li>
                    <li>You may not reverse engineer or attempt to extract source code</li>
                    <li>You may not remove or alter any proprietary notices</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Privacy */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">5. Privacy</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of our services, to understand our practices.
                  </p>
                  <p>
                    By using our services, you consent to the collection and use of information as 
                    outlined in our Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Section 6: Disclaimers */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-red-400 mb-4">6. Disclaimers and Limitations</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Service Availability</h4>
                  <p>
                    We strive to maintain service availability but do not guarantee uninterrupted access. 
                    Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white">Disclaimer of Warranties</h4>
                  <p>
                    Our services are provided "as is" and "as available" without warranties of any kind, 
                    either express or implied, including but not limited to warranties of merchantability 
                    or fitness for a particular purpose.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white">Limitation of Liability</h4>
                  <p>
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising from your 
                    use of our services.
                  </p>
                </div>
              </div>

              {/* Section 7: Termination */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">7. Termination</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for any reason whatsoever, including breach of these terms.
                  </p>
                  <p>
                    Upon termination, your right to use our services will cease immediately, and you 
                    must discontinue all use of our services.
                  </p>
                </div>
              </div>

              {/* Section 8: Governing Law */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">8. Governing Law</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the 
                    State of Delaware, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                    of the courts located in Delaware.
                  </p>
                </div>
              </div>

              {/* Section 9: Contact Information */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">9. Contact Information</h3>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Zion Tech Group</h4>
                    <div className="space-y-2">
                      <p>Email: legal@ziontechgroup.com</p>
                      <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                      <p>Phone: +1 302 464 0950</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agreement Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"
            >
              <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
              <p className="text-gray-300 mb-6">
                By using our services, you acknowledge that you have read and understood these Terms of Service 
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.
              </p>
              <p className="text-sm text-gray-400">
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}