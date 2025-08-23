import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  User, Lock, Globe, Scale, Clock, Mail
} from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'By accessing or using our services, you agree to be bound by these terms',
        'If you do not agree to these terms, do not use our services',
        'We may modify these terms at any time with notice',
        'Continued use after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'AI and machine learning solutions',
        'Quantum computing services',
        'IT infrastructure and consulting',
        'Micro SAAS applications',
        'Business automation services',
        'Technical support and maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <User className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide accurate and complete information',
        'Maintain security of your account credentials',
        'Comply with applicable laws and regulations',
        'Use services for lawful purposes only',
        'Respect intellectual property rights'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Our services and content are protected by copyright',
        'You retain rights to your own content',
        'No transfer of intellectual property rights',
        'License to use our services as intended',
        'Prohibition of reverse engineering'
      ]
    }
  ];

  const prohibitedActivities = [
    'Unauthorized access to our systems or networks',
    'Interference with service operation',
    'Distribution of malware or harmful code',
    'Violation of third-party rights',
    'Attempts to gain unauthorized access',
    'Use of services for illegal activities'
  ];

  const limitations = [
    'Services provided "as is" without warranties',
    'No guarantee of uninterrupted service',
    'Limitation of liability for damages',
    'No responsibility for third-party content',
    'Service availability subject to change',
    'Technical support during business hours only'
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Terms of Service
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Please read these terms carefully before using our services. They govern your use of Zion Tech Group's technology solutions.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <FileText className="w-6 h-6" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Understanding Our Terms
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    These Terms of Service establish the rules and guidelines for using Zion Tech Group's 
                    services. They protect both you and us, ensuring a clear understanding of our relationship 
                    and responsibilities.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to 
                    be bound by these terms. If you have any questions, please contact us before proceeding.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Scale className="w-6 h-6" />
                    <span className="font-medium">Clear and fair terms</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <FileText className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Legal Framework</h3>
                      <p className="text-gray-300">Protecting your rights and ours</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">100%</div>
                          <div className="text-gray-400">Transparent</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">24/7</div>
                          <div className="text-gray-400">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Terms */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Key Terms and Conditions</h2>
                <p className="text-xl text-gray-300">Essential information about using our services</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {termsSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Prohibited Activities</h2>
                <p className="text-xl text-gray-300">Activities that are not allowed when using our services</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">What You Cannot Do</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    <strong>Note:</strong> Violation of these prohibitions may result in immediate suspension 
                    or termination of your access to our services, and may be reported to appropriate authorities.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Service Limitations */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Service Limitations and Disclaimers</h2>
                <p className="text-xl text-gray-300">Important information about service availability and warranties</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Service Limitations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{limitation}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Important:</strong> These limitations are designed to set realistic expectations 
                    and protect both parties. We strive to provide excellent service but cannot guarantee 
                    perfection in all circumstances.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Detailed Terms */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Terms and Conditions</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">1. Service Agreement</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        This agreement is between Zion Tech Group ("we," "us," or "our") and you ("user," 
                        "client," or "customer"). By using our services, you agree to these terms and 
                        acknowledge that you have read and understood them.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We reserve the right to modify these terms at any time. Changes will be effective 
                        immediately upon posting on our website. Your continued use of services after changes 
                        constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">2. Service Description and Availability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services include AI and machine learning solutions, quantum computing services, 
                        IT infrastructure consulting, micro SAAS applications, business automation, and 
                        technical support.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We strive to maintain high service availability but cannot guarantee uninterrupted 
                        access. Services may be temporarily unavailable due to maintenance, updates, or 
                        circumstances beyond our control.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">3. User Accounts and Responsibilities</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        You are responsible for maintaining the confidentiality of your account credentials 
                        and for all activities that occur under your account. You must notify us immediately 
                        of any unauthorized use.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to provide accurate, current, and complete information when creating 
                        accounts and using our services. You must use services only for lawful purposes 
                        and in compliance with applicable laws and regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">4. Payment Terms and Billing</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Service fees are billed according to the pricing schedule in effect at the time 
                        of service. All fees are non-refundable except as expressly stated in our refund policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We may change our pricing with 30 days' notice. Late payments may result in service 
                        suspension or termination. You are responsible for all applicable taxes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services, including software, content, and technology, are protected by copyright, 
                        trademark, and other intellectual property laws. You retain rights to your own content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You may not copy, modify, distribute, sell, or lease any part of our services without 
                        our written permission. You may not reverse engineer or attempt to extract source code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">6. Data Privacy and Security</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We are committed to protecting your privacy and data security. Our collection and 
                        use of personal information is governed by our Privacy Policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We implement appropriate security measures to protect your data, but cannot guarantee 
                        absolute security. You are responsible for maintaining the security of your own systems.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        To the maximum extent permitted by law, our liability for any claims arising from 
                        the use of our services is limited to the amount you paid for services in the 
                        12 months preceding the claim.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We are not liable for indirect, incidental, special, consequential, or punitive 
                        damages, including lost profits, data, or business opportunities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">8. Termination and Suspension</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Either party may terminate this agreement with written notice. We may suspend or 
                        terminate services immediately for violations of these terms or for non-payment.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Upon termination, your access to services will cease, and we may delete your data 
                        in accordance with our data retention policies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">9. Governing Law and Disputes</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        These terms are governed by the laws of Delaware, United States. Any disputes will 
                        be resolved through binding arbitration in accordance with the rules of the American 
                        Arbitration Association.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to resolve disputes individually and waive any right to participate in 
                        class action lawsuits or class-wide arbitration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">10. Contact Information</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        For questions about these terms or our services, please contact us at:
                      </p>
                      <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-300">
                          <strong>Email:</strong> kleber@ziontechgroup.com
                        </p>
                        <p className="text-gray-300">
                          <strong>Phone:</strong> +1 302 464 0950
                        </p>
                        <p className="text-gray-300">
                          <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  If you have any questions about these Terms of Service or need clarification on any 
                  provision, please don't hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    Contact Form
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
};

export default TermsPage;