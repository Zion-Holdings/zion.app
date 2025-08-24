import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, CheckCircle } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your data is encrypted and stored securely using enterprise-grade security protocols"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect and how we use it"
    },
    {
      icon: Database,
      title: "Data Control",
      description: "You have full control over your data and can request deletion at any time"
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Company name"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Usage Data",
      examples: ["Website interactions", "Service usage patterns", "Performance metrics"],
      purpose: "To improve our services and user experience"
    },
    {
      category: "Technical Data",
      examples: ["IP address", "Browser type", "Device information", "Cookies"],
      purpose: "To ensure security and optimize performance"
    }
  ];

  const yourRights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request data deletion",
    "Object to data processing",
    "Data portability",
    "Withdraw consent"
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and personal information. Our comprehensive privacy policy ensures your data security." />
        <meta name="keywords" content="privacy policy, data protection, Zion Tech Group, privacy" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="How we protect your privacy and personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Your privacy is important to us. Learn how we protect and handle your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're committed to protecting your privacy and ensuring data security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                    <p className="text-white/70 leading-relaxed">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Data Collection & Usage
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <motion.div
                  key={type.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <h3 className="text-2xl font-bold text-white mb-4">{type.category}</h3>
                    
                    <h4 className="font-semibold text-white mb-3">Examples:</h4>
                    <ul className="space-y-2 mb-4">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-white/70 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-white mb-2">Purpose:</h4>
                    <p className="text-white/70 leading-relaxed">{type.purpose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                You have complete control over your personal information
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yourRights.map((right, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{right}</span>
                  </div>
                ))}
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
              <h2 className="text-4xl font-bold mb-6 text-white">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                If you have any questions about our privacy policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Privacy Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}