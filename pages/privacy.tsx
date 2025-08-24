import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Calendar, Mail } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  const lastUpdated = '2024-01-15';

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
        keywords="privacy policy, data protection, GDPR, CCPA, Zion Tech Group"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-zion-slate-light">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zion-cyan" />
                  Last Updated: {new Date(lastUpdated).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-zion-cyan" />
                  GDPR Compliant
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-zion-cyan" />
                  Transparent Practices
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 bg-zion-blue">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
                <p className="text-zion-slate-light mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="text-zion-slate-light mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Name, email address, and contact information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Account credentials and profile information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Payment and billing information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Communication preferences and feedback
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">How We Use Your Information</h2>
                <p className="text-zion-slate-light mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="text-zion-slate-light mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Processing transactions and managing your account
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Providing customer support and responding to inquiries
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Sending important updates and service notifications
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Improving our services and developing new features
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">Information Sharing</h2>
                <p className="text-zion-slate-light mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except in the following circumstances:
                </p>
                <ul className="text-zion-slate-light mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    With your explicit consent
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    To comply with legal obligations
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    To protect our rights and prevent fraud
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    With trusted service providers who assist in our operations
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
                <p className="text-zion-slate-light mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-zion-slate-light mb-6">
                  These measures include encryption, secure servers, access controls, and regular security assessments.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
                <p className="text-zion-slate-light mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="text-zion-slate-light mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Access and review your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Correct inaccurate or incomplete information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Request deletion of your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Object to or restrict certain processing activities
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                    Data portability
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6">Cookies and Tracking</h2>
                <p className="text-zion-slate-light mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
                <p className="text-zion-slate-light mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">International Transfers</h2>
                <p className="text-zion-slate-light mb-4">
                  Your personal information may be transferred to and processed in countries other than 
                  your own. We ensure appropriate safeguards are in place to protect your information.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Changes to This Policy</h2>
                <p className="text-zion-slate-light mb-4">
                  We may update this privacy policy from time to time. We will notify you of any material 
                  changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-zion-slate-light mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>privacy@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-zion-purple to-zion-cyan">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Privacy?</h2>
              <p className="text-xl text-white/90 mb-8">
                We're committed to transparency and protecting your privacy. Contact us if you need clarification 
                on any aspect of our privacy practices.
              </p>
              <a
                href="/contact"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
