import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, User, Database, Globe, Mail, 
  Phone, MapPin, Calendar, CheckCircle, AlertTriangle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  const privacyPrinciples = [
    {
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it.',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security',
      description: 'Your data is protected with industry-standard security measures.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Control',
      description: 'You have full control over your personal information.',
      icon: User,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Minimization',
      description: 'We only collect data that is necessary for our services.',
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company information and job title', 'Contact preferences and communication history'],
      purpose: 'To provide our services, communicate with you, and improve our offerings'
    },
    {
      category: 'Technical Data',
      examples: ['IP address and device information', 'Browser type and operating system', 'Usage patterns and analytics data'],
      purpose: 'To ensure security, optimize performance, and provide technical support'
    },
    {
      category: 'Service Usage Data',
      examples: ['Service interactions and feature usage', 'Performance metrics and error logs', 'Support requests and feedback'],
      purpose: 'To improve our services, provide support, and develop new features'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: AlertTriangle
    },
    {
      right: 'Portability',
      description: 'Receive your data in a portable format',
      icon: Database
    },
    {
      right: 'Restriction',
      description: 'Limit how we process your data',
      icon: Lock
    },
    {
      right: 'Objection',
      description: 'Object to certain types of processing',
      icon: User
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices, data protection measures, and your rights regarding personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, personal data, Zion Tech Group privacy" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to protecting your privacy and personal data." />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is fundamental to us. Learn how we protect your personal information 
              and ensure transparency in our data practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Last Updated</span>
            </div>
            <p className="text-white/70">
              This privacy policy was last updated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Privacy Principles</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We are committed to protecting your privacy through these fundamental principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center`}>
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We collect only the information necessary to provide our services and improve your experience
            </p>
          </div>
          
          <div className="space-y-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Purpose:</h4>
                  <p className="text-white/70 text-sm">{category.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We use your information responsibly to provide and improve our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Service Provision</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Deliver our technology services and solutions</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Process payments and manage subscriptions</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Provide customer support and technical assistance</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Send important service updates and notifications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Service Improvement</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Analyze usage patterns to improve our services</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Develop new features and capabilities</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Conduct research and development</span>
                </li>
                <li className="flex items-start space-x-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Ensure security and prevent fraud</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              You have control over your personal information and can exercise these rights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <right.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{right.right}</h3>
                </div>
                <p className="text-white/70 text-sm">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We implement robust security measures to protect your information
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Measures</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Encryption in transit and at rest</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and monitoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Employee training and awareness</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular policy reviews</li>
                  <li>• Third-party security assessments</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have questions about our privacy practices? We're here to help.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Email</h3>
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  privacy@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Address</h3>
                <p className="text-white/70 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}