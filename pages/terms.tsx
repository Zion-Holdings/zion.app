import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Users,
  Globe,
  Scale
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const TermsPage: React.FC = () => {
  const terms = [
    {
      title: '1. Acceptance of Terms',
      description: 'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.',
      details: 'If you do not agree to abide by the above, please do not use this service.',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '2. Use License',
      description: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only.',
      details: 'This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '3. Disclaimer',
      description: 'The materials on Zion Tech Group\'s website are provided on an \'as is\' basis. Zion Tech Group makes no warranties, expressed or implied.',
      details: 'We hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '4. Limitations',
      description: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.',
      details: 'This includes, without limitation, damages for loss of data or profit, or due to business interruption.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '5. Revisions and Errata',
      description: 'The materials appearing on Zion Tech Group\'s website could include technical, typographical, or photographic errors.',
      details: 'Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on our website at any time without notice.',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '6. Links',
      description: 'Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.',
      details: 'The inclusion of any link does not imply endorsement by Zion Tech Group of the site.',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: '7. Site Terms of Use Modifications',
      description: 'Zion Tech Group may revise these terms of use for its website at any time without notice.',
      details: 'By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: '8. Governing Law',
      description: 'Any claim relating to Zion Tech Group\'s website shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions.',
      details: 'All disputes will be resolved in accordance with Delaware state law.',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const lastUpdated = '2025-01-17';

  return (
    <Layout>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Terms of Service for Zion Tech Group - Learn about our service terms and conditions for using our technology platforms and services."
        keywords={["terms of service", "terms and conditions", "service agreement", "Zion Tech Group", "legal terms"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Our terms and conditions for using Zion Tech Group services and technology platforms.
              </p>
              
              {/* Last Updated */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>Last updated: {new Date(lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Service Terms & Conditions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {terms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${term.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {term.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{term.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{term.description}</p>
                      <p className="text-gray-400 leading-relaxed">{term.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/privacy"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Privacy Policy
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