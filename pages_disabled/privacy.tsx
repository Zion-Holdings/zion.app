<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, Eye, Lock, Database, Users, Globe,
  CheckCircle, AlertTriangle, Info
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      content: [
        'Personal information (name, email, phone number)',
        'Company information and business details',
        'Usage data and analytics',
        'Technical information (IP address, browser type)',
        'Communication records and support interactions'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Users className="w-6 h-6" />,
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Process payments and transactions',
        'Send marketing communications (with consent)',
        'Comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Globe className="w-6 h-6" />,
      content: [
        'We do not sell your personal information',
        'Share with service providers and partners',
        'Comply with legal requirements',
        'Protect our rights and safety',
        'Business transfers (with notice)'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: [
        'Industry-standard encryption protocols',
        'Regular security audits and assessments',
        'Access controls and authentication',
        'Data backup and recovery procedures',
        'Employee training on data protection'
      ]
    },
    {
      title: 'Your Rights',
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        'Access your personal information',
        'Correct inaccurate data',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Data portability'
      ]
    },
    {
      title: 'Data Retention',
      icon: <Info className="w-6 h-6" />,
      content: [
        'Retain data as long as necessary',
        'Comply with legal requirements',
        'Resolve disputes and enforce agreements',
        'Improve our services',
        'Regular data cleanup procedures'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Privacy Policy — Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlines how we collect, use, and protect your personal information. Learn about your rights and our data protection practices." />
        <meta property="og:title" content="Privacy Policy — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive privacy policy detailing how we protect your data and respect your privacy rights." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we protect your data and respect your rights.
            </p>
            <div className="mt-8 text-gray-300">
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe in transparency and want you to understand how your data is handled. If you have any questions about this policy, 
              please contact us at{' '}
              <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                privacy@ziontechgroup.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Cookies and Tracking
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. 
                You can control cookie settings through your browser preferences.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to understand usage patterns</li>
                <li>• Marketing cookies for personalized content</li>
                <li>• Third-party cookies from trusted partners</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                International Data Transfers
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply 
                with applicable data protection laws and implement appropriate safeguards.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Data processing in the United States and other countries</li>
                <li>• Adequacy decisions and standard contractual clauses</li>
                <li>• Appropriate technical and organizational measures</li>
                <li>• Regular compliance assessments</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                Children&apos;s Privacy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from 
                children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re here to help. Contact our privacy team for any questions or concerns about your data.
            </p>
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Your Rights</h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• Request access to your data</p>
                    <p>• Correct inaccurate information</p>
                    <p>• Request data deletion</p>
                    <p>• Opt-out of communications</p>
                    <p>• File a complaint</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
=======
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>Privacy - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Privacy</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/privacy</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
  );
}
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
