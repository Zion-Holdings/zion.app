import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Users, Database, Globe, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const Privacy = () => {
  const privacyPrinciples = [
    {
      title: "Transparency",
      description: "We are clear about how we collect, use, and protect your data",
      icon: Eye,
      color: "text-blue-400"
    },
    {
      title: "Security",
      description: "Your data is protected with enterprise-grade security measures",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Control",
      description: "You have full control over your personal information",
      icon: Lock,
      color: "text-purple-400"
    },
    {
      title: "Minimization",
      description: "We only collect data that is necessary for our services",
      icon: Database,
      color: "text-orange-400"
    }
  ];

  const dataCategories = [
    {
      category: "Personal Information",
      examples: ["Name, email address, phone number", "Company information", "Job title and role"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address, browser type", "Device information", "Usage analytics"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Business Information",
      examples: ["Project requirements", "Service preferences", "Feedback and reviews"],
      purpose: "To deliver personalized solutions and support"
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request deletion of your data",
    "Object to data processing",
    "Data portability",
    "Withdraw consent",
    "Lodge a complaint"
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy | Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with data protection regulations."
        keywords="privacy policy, data protection, GDPR, privacy, Zion Tech Group"
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
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Privacy is Our
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Priority
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#privacy-policy"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Read Policy
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

        {/* Privacy Principles */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                We follow these core principles to ensure your data is handled responsibly and securely.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section id="privacy-policy" className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zion-blue border border-zion-cyan/20 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
                <p className="text-zion-slate-light mb-6">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <div className="space-y-6 text-zion-slate-light">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                    <p>
                      Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you visit our website or use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h3>
                    <div className="space-y-4">
                      {dataCategories.map((category, index) => (
                        <div key={index} className="bg-zion-blue-dark border border-zion-cyan/20 rounded-xl p-4">
                          <h4 className="text-white font-semibold mb-2">{category.category}</h4>
                          <div className="mb-2">
                            <strong className="text-zion-cyan">Examples:</strong>
                            <ul className="list-disc list-inside ml-4 mt-1">
                              {category.examples.map((example, idx) => (
                                <li key={idx}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-zion-cyan">Purpose:</strong> {category.purpose}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h3>
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Provide and maintain our services</li>
                      <li>Communicate with you about our services</li>
                      <li>Improve and personalize your experience</li>
                      <li>Ensure security and prevent fraud</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4. Data Sharing and Disclosure</h3>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>With your explicit consent</li>
                      <li>To trusted service providers who assist in our operations</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and safety</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">5. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational security measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or destruction. 
                      These measures include encryption, secure servers, and regular security assessments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
                    <p>You have the following rights regarding your personal data:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {rights.map((right, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {right}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">7. Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes 
                      outlined in this policy, unless a longer retention period is required or permitted by law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">8. Cookies and Tracking</h3>
                    <p>
                      We use cookies and similar tracking technologies to enhance your browsing experience, 
                      analyze website traffic, and understand where our visitors are coming from. You can 
                      control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">9. International Transfers</h3>
                    <p>
                      Your information may be transferred to and processed in countries other than your own. 
                      We ensure that such transfers comply with applicable data protection laws and implement 
                      appropriate safeguards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">10. Children's Privacy</h3>
                    <p>
                      Our services are not intended for children under 13 years of age. We do not knowingly 
                      collect personal information from children under 13. If you are a parent or guardian and 
                      believe your child has provided us with personal information, please contact us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes 
                      by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">12. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                Questions About Privacy?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                We're committed to transparency and protecting your privacy. Contact us if you have any questions.
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
                  to="/terms"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;