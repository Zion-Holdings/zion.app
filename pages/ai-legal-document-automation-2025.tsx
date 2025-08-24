import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, Clock, DollarSign, TrendingUp, 
  CheckCircle, Users, Globe, Zap, Brain, ArrowRight,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

const AILegalDocumentAutomation2025: React.FC = () => {
  const features = [
    'AI-powered contract generation',
    'Legal document templates',
    'Compliance monitoring',
    'Risk assessment automation',
    'Document version control',
    'Electronic signature integration',
    'Legal research automation',
    'Case law analysis',
    'Regulatory updates',
    'Multi-jurisdiction support',
    'API access',
    'White-label solutions'
  ];

  const benefits = [
    'Reduce legal document costs by 70%',
    'Improve document accuracy by 90%',
    'Speed up contract generation by 80%',
    'Automate compliance monitoring',
    'Reduce legal risks',
    'Scale legal operations',
    '24/7 legal document access',
    'Competitive legal advantage'
  ];

  const useCases = [
    'Law firms',
    'Corporate legal departments',
    'Real estate companies',
    'Healthcare organizations',
    'Financial institutions',
    'Startups',
    'Small businesses',
    'Consulting firms'
  ];

  const pricing = {
    starter: {
      price: '$299/month',
      features: [
        'Up to 100 documents/month',
        'Basic AI contract generation',
        'Standard legal templates',
        'Email support',
        'Basic compliance monitoring'
      ]
    },
    professional: {
      price: '$799/month',
      features: [
        'Up to 500 documents/month',
        'Advanced AI contract generation',
        'Custom legal templates',
        'Priority support',
        'Advanced compliance monitoring',
        'Risk assessment tools',
        'API access'
      ]
    },
    enterprise: {
      price: '$1,999/month',
      features: [
        'Unlimited documents',
        'Full AI contract generation',
        'Custom legal templates',
        'Dedicated support',
        'Full compliance monitoring',
        'Advanced risk assessment',
        'White-label solutions',
        'Custom integrations'
      ]
    }
  };

  return (
    <Layout 
      title="AI Legal Document Automation Platform 2025 - Zion Tech Group"
      description="Revolutionary AI-powered legal document generation and automation platform. Reduce legal costs by 70% and improve document accuracy by 90%."
      keywords="AI legal automation, legal document generation, contract automation, legal tech, compliance monitoring, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Legal Document Automation Platform 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered legal document generation and automation with real-time compliance monitoring and multi-jurisdiction support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Legal Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform revolutionizes legal document creation, reducing costs by 70% and improving accuracy by 90%.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <CheckCircle className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                  <p className="text-gray-300 text-center">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive legal automation tools designed for modern legal practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <Zap className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your legal practice needs and scale as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border ${
                    plan === 'professional' ? 'border-blue-500 scale-105' : 'border-gray-700'
                  } hover:border-blue-500 transition-all duration-300`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white capitalize mb-2">{plan}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-4">{details.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Designed for legal professionals and organizations seeking to modernize their operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center"
                >
                  <Users className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                  <h3 className="text-white font-semibold">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Legal Operations?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Contact us today to learn how our AI Legal Document Automation Platform can revolutionize your practice.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <Phone className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 text-lg">+1 302 464 0950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <Mail className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-400 text-lg">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <MapPin className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-blue-400 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-xl flex items-center gap-2 mx-auto"
              >
                <ArrowRight className="w-6 h-6" />
                Start Your Free Trial
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AILegalDocumentAutomation2025;