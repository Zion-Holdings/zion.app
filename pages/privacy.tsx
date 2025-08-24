import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Globe, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide (name, email, phone number)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, user interactions)',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Send important updates and notifications',
        'Analyze and improve website performance',
        'Comply with legal obligations'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Globe,
      content: [
        'We do not sell your personal information',
        'Service providers who assist our operations',
        'Legal compliance when required by law',
        'Business transfers (with your consent)',
        'Aggregated, non-personal data for analytics'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: [
        'Industry-standard encryption and security measures',
        'Regular security audits and assessments',
        'Restricted access to personal information',
        'Secure data storage and transmission',
        'Incident response and breach notification procedures'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Lock,
      content: [
        'Access your personal information',
        'Correct inaccurate information',
        'Delete your personal information',
        'Object to processing of your information',
        'Data portability and export options'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and data protection." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <Shield className="w-16 h-16 text-cyan-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-sm text-gray-400"
            >
              <p>Last updated: December 2024</p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center mb-6">
                  <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-8 h-8 text-cyan-400 mr-4" />
                Contact Us About Privacy
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">privacy@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  );
}