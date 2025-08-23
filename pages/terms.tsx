import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, Globe, Clock, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const TermsPage: React.FC = () => {
  const keyTerms = [
    {
      icon: Shield,
      title: 'Service Usage',
      description: 'Our services are provided for legitimate business and research purposes only.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Users must comply with all applicable laws and regulations when using our services.'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'We maintain compliance with international laws and industry standards.'
    },
    {
      icon: Scale,
      title: 'Legal Framework',
      description: 'All services are governed by applicable laws and our service agreements.'
    }
  ];

  const serviceTerms = [
    {
      title: 'AI Consciousness Services',
      terms: [
        'Services are provided on an "as-is" basis with no warranties',
        'Users must not attempt to reverse engineer our AI systems',
        'Data processing follows our privacy policy and data protection standards',
        'Service availability is subject to maintenance and updates'
      ]
    },
    {
      title: 'Quantum Technology Services',
      terms: [
        'Quantum computing resources are allocated based on service tier',
        'Users must comply with export control regulations',
        'Performance metrics are provided for informational purposes only',
        'Service interruptions may occur during quantum system calibration'
      ]
    },
    {
      title: 'Cybersecurity Services',
      terms: [
        'Security assessments are conducted according to industry standards',
        'Vulnerability reports are confidential and must not be shared',
        'Penetration testing requires written authorization',
        'Incident response follows our established protocols'
      ]
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using services for illegal or harmful purposes',
    'Violating intellectual property rights',
    'Interfering with service availability',
    'Sharing confidential information without authorization',
    'Attempting to manipulate or exploit our AI systems',
    'Using services for cyber attacks or malicious activities'
  ];

  const userObligations = [
    'Provide accurate and complete information',
    'Maintain the security of account credentials',
    'Comply with all applicable laws and regulations',
    'Respect intellectual property rights',
    'Report security vulnerabilities responsibly',
    'Use services only for authorized purposes',
    'Maintain appropriate data protection measures'
  ];

  return (
    <Layout 
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions governing the use of Zion Tech Group's AI consciousness, quantum computing, and cybersecurity services."
      keywords="terms of service, terms and conditions, service agreement, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms carefully before using our revolutionary AI consciousness, 
                quantum computing, and cybersecurity services.
              </p>
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Last updated: January 15, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Terms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Terms & Conditions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These terms govern your use of our services and establish our mutual rights and obligations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <term.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{term.title}</h3>
                  <p className="text-gray-400">{term.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific Terms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service-Specific Terms
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Additional terms apply to specific services and technologies.
              </p>
            </motion.div>

            <div className="space-y-8">
              {serviceTerms.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.terms.map((term, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{term}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The following activities are strictly prohibited and may result in service termination.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl rounded-3xl p-8 border border-red-700/50">
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Zero Tolerance Policy</h3>
                <p className="text-gray-300">
                  Violation of these terms may result in immediate service termination and legal action.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Obligations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                User Obligations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                By using our services, you agree to fulfill these obligations.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Your Responsibilities:</h3>
                  <ul className="space-y-3">
                    {userObligations.map((obligation, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Consequences of Non-Compliance:</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">Warning</h4>
                      <p className="text-gray-300 text-sm">
                        First violations may result in warnings and temporary service restrictions.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-orange-400 mb-2">Suspension</h4>
                      <p className="text-gray-300 text-sm">
                        Repeated violations may lead to temporary service suspension.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="font-semibold text-red-400 mb-2">Termination</h4>
                      <p className="text-gray-300 text-sm">
                        Severe or repeated violations may result in permanent service termination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intellectual Property
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding our intellectual property rights and your usage permissions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Our Rights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>All technology, algorithms, and systems remain our exclusive property</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Service improvements and developments belong to Zion Tech Group</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Brand names, logos, and trademarks are protected intellectual property</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Your Rights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>License to use our services according to these terms</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Ownership of your data and content remains with you</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Right to terminate service usage at any time</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limitation of Liability
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understanding the scope of our liability and your rights as a user.
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Service Limitations:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Services are provided "as-is" without warranties</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>We are not liable for indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Liability is limited to the amount paid for services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Force Majeure:</h3>
                  <p className="text-gray-300 mb-4">
                    We are not liable for delays or failures due to circumstances beyond our control, including:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Natural disasters and extreme weather</li>
                    <li>• Government actions and regulations</li>
                    <li>• Infrastructure failures and cyber attacks</li>
                    <li>• Global pandemics and health emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We're here to clarify any questions about our terms of service and help ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Legal Team
                  <FileText className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsPage;