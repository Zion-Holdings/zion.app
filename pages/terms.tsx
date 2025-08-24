import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Scale, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function TermsOfService() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing our website and services, you agree to these terms',
        'These terms constitute a legally binding agreement',
        'If you disagree with any terms, please discontinue use',
        'We may update these terms periodically with notice'
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Users,
      content: [
        'AI and machine learning consulting services',
        'Quantum computing research and development',
        'Cybersecurity solutions and assessments',
        'Cloud infrastructure and digital transformation',
        'Custom software development and support'
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'Provide accurate and complete information',
        'Maintain confidentiality of account credentials',
        'Use services in compliance with applicable laws',
        'Respect intellectual property rights',
        'Report security vulnerabilities responsibly'
      ]
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses',
      icon: AlertTriangle,
      content: [
        'Illegal activities or violation of laws',
        'Unauthorized access to our systems',
        'Distribution of malware or harmful code',
        'Harassment or harmful behavior toward others',
        'Reverse engineering of proprietary systems'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        'All content and technology remain our property',
        'Limited license granted for authorized use',
        'Respect for third-party intellectual property',
        'Client retains ownership of their data',
        'Joint developments subject to separate agreements'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Terms of Service | Zion Tech Group</title>
        <meta name="description" content="Review the terms of service for Zion Tech Group. Our terms outline the rules and regulations for using our technology services and platform." />
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
              <FileText className="w-16 h-16 text-cyan-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Terms of Service
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              These terms govern your use of our services and establish the legal framework for our relationship.
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

        {/* Terms Content */}
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

            {/* Additional Terms Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability for any claims shall not exceed the amount paid by you for the services 
                  during the twelve months preceding the claim.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, 
                  without regard to its conflict of law principles. Any disputes shall be resolved in the courts of 
                  San Francisco County, California.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-8 h-8 text-cyan-400 mr-4" />
                Questions About These Terms?
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions about these terms of service, please contact us:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">legal@ziontechgroup.com</p>
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