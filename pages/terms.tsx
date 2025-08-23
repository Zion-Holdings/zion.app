import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  Globe, Calendar, Scale, Users, ArrowRight,
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react';

export default function TermsPage() {
  const termsSections = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Acceptance of Terms',
      description: 'By using our services, you agree to these terms and conditions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Service Description',
      description: 'Comprehensive overview of our AI consciousness and quantum computing services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'User Obligations',
      description: 'Your responsibilities when using our services and platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Legal Terms',
      description: 'Important legal provisions and dispute resolution procedures',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const serviceCategories = [
    {
      category: 'AI Consciousness Services',
      description: 'Advanced AI systems with consciousness and emotional intelligence capabilities',
      features: ['Emotional intelligence', 'Self-awareness', 'Decision-making', 'Learning systems'],
      restrictions: ['No malicious use', 'Compliance with AI ethics', 'Data privacy requirements'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: 'Quantum Computing Platform',
      description: 'Quantum computing services for complex computational problems',
      features: ['Quantum algorithms', 'Hybrid classical-quantum', 'Optimization tools', 'Simulation capabilities'],
      restrictions: ['No weapon development', 'Export control compliance', 'Security protocols'],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      category: 'Space Technology Solutions',
      description: 'Space resource intelligence and exploration technology services',
      features: ['Resource mapping', 'Celestial analysis', 'Exploration data', 'Intelligence platforms'],
      restrictions: ['No military applications', 'International space law compliance', 'Environmental protection'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      category: 'Enterprise Solutions',
      description: 'Comprehensive enterprise technology and infrastructure services',
      features: ['IT infrastructure', 'Cloud services', 'Security solutions', 'Consulting services'],
      restrictions: ['Valid business use', 'Compliance requirements', 'Licensing terms'],
      icon: <Building className="w-6 h-6" />
    }
  ];

  const userObligations = [
    {
      obligation: 'Acceptable Use',
      description: 'Use services only for lawful and authorized purposes',
      details: [
        'Comply with all applicable laws and regulations',
        'Respect intellectual property rights',
        'Maintain security and confidentiality',
        'No unauthorized access or interference'
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      obligation: 'Account Security',
      description: 'Maintain the security of your account and credentials',
      details: [
        'Use strong, unique passwords',
        'Enable multi-factor authentication',
        'Report security incidents immediately',
        'No sharing of account credentials'
      ],
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      obligation: 'Data Compliance',
      description: 'Ensure compliance with data protection and privacy requirements',
      details: [
        'Obtain necessary consents',
        'Implement appropriate safeguards',
        'Respect user privacy rights',
        'Report data breaches promptly'
      ],
      icon: <Lock className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      obligation: 'Payment Obligations',
      description: 'Timely payment of all fees and charges for services',
      details: [
        'Pay invoices within specified terms',
        'Maintain valid payment methods',
        'Notify of billing disputes',
        'Comply with pricing agreements'
      ],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const legalProvisions = [
    {
      title: 'Intellectual Property',
      description: 'All services, software, and content remain our exclusive property',
      details: [
        'You retain ownership of your data and content',
        'We retain rights to our technology and improvements',
        'No reverse engineering or modification without permission',
        'Licenses are non-transferable and revocable'
      ]
    },
    {
      title: 'Limitation of Liability',
      description: 'Our liability is limited to the amount paid for services',
      details: [
        'No liability for indirect or consequential damages',
        'Exclusions for force majeure events',
        'Limitations on warranty claims',
        'Mutual indemnification obligations'
      ]
    },
    {
      title: 'Termination',
      description: 'Either party may terminate services with proper notice',
      details: [
        '30 days written notice for standard termination',
        'Immediate termination for material breaches',
        'Data return and deletion procedures',
        'Surviving obligations after termination'
      ]
    },
    {
      title: 'Dispute Resolution',
      description: 'Mandatory arbitration for all disputes',
      details: [
        'Binding arbitration in Delaware',
        'Governing law is Delaware state law',
        'Class action waivers',
        'Appeal rights limited'
      ]
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
                Terms of Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Legal terms and conditions governing the use of Zion Tech Group services. 
              Please read carefully before using our platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#terms-sections"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Read Terms
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section id="terms-sections" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key sections of our terms of service and what they cover
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-300 text-sm">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories & Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed terms for each category of services we provide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.category}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.restrictions.map((restriction, restrictionIndex) => (
                          <li key={restrictionIndex} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              User Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your responsibilities and obligations when using our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${obligation.color} flex items-center justify-center`}>
                      {obligation.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {obligation.obligation}
                    </h3>
                    <p className="text-gray-300 mb-4">{obligation.description}</p>
                    <ul className="space-y-2">
                      {obligation.details.map((detail, detailIndex) => (
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

      {/* Legal Provisions */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Legal Provisions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important legal terms and conditions that govern our relationship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {legalProvisions.map((provision, index) => (
              <motion.div
                key={provision.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {provision.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{provision.description}</p>
                    <ul className="space-y-2">
                      {provision.details.map((detail, detailIndex) => (
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

      {/* Important Notices */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Important Notices
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Critical information about our terms and your rights
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Acceptance of Terms</h3>
              <p className="text-gray-300 mb-4">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Continued use constitutes acceptance of any updated terms</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Changes to Terms</h3>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of material changes through our website, email, or other appropriate means. Your continued use of services after changes constitutes acceptance of the new terms.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Last updated: January 15, 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Governing Law</h3>
              <p className="text-gray-300 mb-4">
                These Terms of Service are governed by and construed in accordance with the laws of the State of Delaware, United States. Any disputes arising from these terms will be resolved through binding arbitration in Delaware.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Jurisdiction: Delaware, United States</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact Information</h3>
              <p className="text-gray-300 mb-4">
                For questions about these terms or to exercise your rights, please contact our legal team. We are committed to addressing your concerns promptly and professionally.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Legal Team:</h4>
                  <p className="text-gray-300">legal@ziontechgroup.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">General Support:</h4>
                  <p className="text-gray-300">support@ziontechgroup.com</p>
                </div>
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our legal team is here to help you understand these terms and your obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Legal Team
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
              <h3 className="text-xl font-semibold mb-3">Stay Informed</h3>
              <p className="text-gray-300 mb-4">
                Get notified about updates to our terms of service and legal policies.
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