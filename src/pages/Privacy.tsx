import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe, Zap } from 'lucide-react';

const Privacy = () => {
  const privacySections = [
    {
      title: 'Information We Collect',
      description: 'We collect information you provide directly to us and information we obtain automatically.',
      items: [
        'Personal information (name, email, phone number)',
        'Business information (company name, job title)',
        'Usage data and analytics',
        'Technical information (IP address, device information)'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'How We Use Information',
      description: 'We use the information we collect to provide and improve our services.',
      items: [
        'Provide and maintain our services',
        'Communicate with you about our services',
        'Improve and personalize user experience',
        'Ensure security and prevent fraud'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Information Sharing',
      description: 'We do not sell, trade, or rent your personal information to third parties.',
      items: [
        'Service providers and partners',
        'Legal requirements and compliance',
        'Business transfers and mergers',
        'With your explicit consent'
      ],
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Security',
      description: 'We implement appropriate security measures to protect your information.',
      items: [
        'Encryption of sensitive data',
        'Regular security assessments',
        'Access controls and authentication',
        'Secure data transmission'
      ],
      icon: Lock,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: Eye
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: Shield
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: Lock
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center gap-4 text-zion-slate-light">
              <Shield className="w-6 h-6" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Commitment
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-zion-slate-light mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Rights
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              You have certain rights regarding your personal information under applicable privacy laws.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{right.title}</h3>
                  <p className="text-zion-slate-light">{right.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Contact Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Privacy Team
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              If you have questions about this privacy policy or would like to exercise your privacy rights, 
              please contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Email</h3>
                <p className="text-zion-slate-light mb-2">For privacy inquiries:</p>
                <a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  privacy@ziontechgroup.com
                </a>
              </div>
              
              <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">General Contact</h3>
                <p className="text-zion-slate-light mb-2">For general inquiries:</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Address</h3>
              <p className="text-zion-slate-light">
                Zion Tech Group<br />
                364 E Main St STE 1008<br />
                Middletown, DE 19709<br />
                United States
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Policy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Updates
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or applicable laws. We will notify you of any material changes.
            </p>
            
            <div className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20">
              <h3 className="text-xl font-semibold mb-4 text-zion-cyan">Notification of Changes</h3>
              <p className="text-zion-slate-light">
                When we make changes to this privacy policy, we will update the "Last updated" date 
                at the top of this page and may send you an email notification for significant changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;