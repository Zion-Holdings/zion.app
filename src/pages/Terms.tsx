import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Users, Globe, Mail, Phone, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8"
        >
          <div className="flex items-center text-cyan-400 mb-2">
            <Scale className="w-5 h-5 mr-2" />
            <span className="font-semibold">Last Updated:</span>
          </div>
          <p className="text-white">December 2024</p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                By accessing and using the services provided by Zion Tech Group ("we," "us," or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service. These terms 
                apply to all visitors, users, and others who access or use our services.
              </p>
            </div>
          </motion.section>

          {/* Description of Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-cyan-400" />
              Description of Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Zion Tech Group provides technology consulting and development services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI and Machine Learning Solutions</li>
                <li>Cloud Infrastructure Services</li>
                <li>Cybersecurity and Compliance</li>
                <li>Digital Transformation Consulting</li>
                <li>Custom Software Development</li>
                <li>IT Strategy and Planning</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our services 
                at any time with or without notice.
              </p>
            </div>
          </motion.section>

          {/* User Responsibilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-cyan-400" />
              User Responsibilities
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services and their original content, features, and functionality are and will 
                remain the exclusive property of Zion Tech Group and its licensors.
              </p>
              <p>
                The service is protected by copyright, trademark, and other laws. Our trademarks 
                and trade dress may not be used in connection with any product or service without 
                our prior written consent.
              </p>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
              <p>
                Our total liability to you for any claims arising from the use of our services 
                shall not exceed the amount you paid us, if any, for the services in the twelve 
                months preceding the claim.
              </p>
            </div>
          </motion.section>

          {/* Termination */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-cyan-400" />
              Termination
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the service will cease immediately. If you wish 
                to terminate your account, you may simply discontinue using the service.
              </p>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-cyan-400" />
              Governing Law
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these terms or the use of our services shall be resolved 
                in the courts of Delaware, and you consent to the jurisdiction of such courts.
              </p>
            </div>
          </motion.section>

          {/* Changes to Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-cyan-400" />
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms 
                at any time. If a revision is material, we will try to provide at least 30 days 
                notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. 
                By continuing to access or use our service after those revisions become effective, 
                you agree to be bound by the revised terms.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-cyan-400" />
              Contact Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Email: kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>Phone: +1 (302) 464-0950</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200"
          >
            <Globe className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}