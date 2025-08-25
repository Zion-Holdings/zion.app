import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileText, CheckCircle, AlertTriangle, Users, Globe, Scale } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Terms = () => {
  const keyTerms = [
    {
      title: "Acceptance",
      description: "By using our services, you agree to these terms and conditions",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "Services",
      description: "We provide technology solutions and consulting services",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Payment",
      description: "Fees are due according to agreed payment schedules",
      icon: Scale,
      color: "text-purple-400"
    },
    {
      title: "Liability",
      description: "Limitations on our liability as outlined in these terms",
      icon: AlertTriangle,
      color: "text-orange-400"
    }
  ];

  const prohibitedActivities = [
    "Using our services for illegal purposes",
    "Attempting to gain unauthorized access to our systems",
    "Interfering with service availability or performance",
    "Violating intellectual property rights",
    "Sharing confidential information without authorization",
    "Engaging in fraudulent or deceptive practices"
  ];

  const userObligations = [
    "Provide accurate and complete information",
    "Maintain the security of your account credentials",
    "Comply with all applicable laws and regulations",
    "Use services only for intended purposes",
    "Respect intellectual property rights",
    "Report security concerns promptly"
  ];

  return (
    <>
      <SEO 
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's terms of service to understand the rules and conditions for using our technology services and solutions."
        keywords="terms of service, terms and conditions, legal, Zion Tech Group, service agreement"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms of
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                These terms govern your use of Zion Tech Group's services. Please read them carefully 
                to understand your rights and obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#terms-content"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Read Terms
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Terms */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Key Terms
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Important concepts and conditions that govern our service relationship.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyTerms.map((term, index) => {
                const IconComponent = term.icon;
                return (
                  <motion.div
                    key={term.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${term.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {term.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {term.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section id="terms-content" className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zion-blue border border-zion-cyan/20 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Terms of Service</h2>
                <p className="text-zion-slate-light mb-6">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <div className="space-y-6 text-zion-slate-light">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h3>
                    <p>
                      By accessing or using Zion Tech Group's services, you agree to be bound by these Terms of Service. 
                      If you disagree with any part of these terms, you may not access our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2. Description of Services</h3>
                    <p>
                      Zion Tech Group provides technology consulting, software development, AI solutions, cloud services, 
                      and digital transformation services. Our services are designed to help businesses leverage technology 
                      for growth and efficiency.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3. User Accounts</h3>
                    <p>
                      When you create an account with us, you must provide accurate and complete information. You are 
                      responsible for safeguarding your account credentials and for all activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h3>
                    <p>You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {prohibitedActivities.map((activity, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">5. User Obligations</h3>
                    <p>As a user of our services, you agree to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {userObligations.map((obligation, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {obligation}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">6. Payment Terms</h3>
                    <p>
                      Service fees are due according to the payment schedule agreed upon in your service agreement. 
                      Late payments may result in service suspension or termination. All fees are non-refundable unless 
                      otherwise specified.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h3>
                    <p>
                      Our services and content are protected by intellectual property laws. You retain ownership of 
                      your content, but grant us a license to use it for service delivery. We retain ownership of 
                      our proprietary technology and methodologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">8. Confidentiality</h3>
                    <p>
                      Both parties agree to maintain the confidentiality of proprietary and sensitive information 
                      shared during our business relationship. This obligation survives the termination of services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                      incidental, special, consequential, or punitive damages arising from your use of our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">10. Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses 
                      arising from your use of our services or violation of these terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">11. Service Availability</h3>
                    <p>
                      We strive to maintain high service availability but do not guarantee uninterrupted access. 
                      We may perform maintenance or updates that temporarily affect service availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">12. Termination</h3>
                    <p>
                      Either party may terminate services with written notice according to the terms of your service 
                      agreement. Upon termination, you will lose access to our services and any stored data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">13. Governing Law</h3>
                    <p>
                      These terms are governed by the laws of the State of Delaware, United States. Any disputes 
                      will be resolved in the courts of Delaware.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">14. Changes to Terms</h3>
                    <p>
                      We may modify these terms at any time. We will notify you of significant changes via email 
                      or through our website. Continued use of services constitutes acceptance of modified terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">15. Contact Information</h3>
                    <p>
                      For questions about these terms or our services, please contact us:
                    </p>
                    <div className="bg-zion-blue-dark border border-zion-cyan/20 rounded-xl p-4 mt-3">
                      <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                      <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                      <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                We're here to help clarify any questions about our terms of service or policies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/privacy"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;