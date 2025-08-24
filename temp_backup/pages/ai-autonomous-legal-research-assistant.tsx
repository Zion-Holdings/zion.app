import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Scale, FileText, Search, Shield, 
  ArrowRight, CheckCircle, Users, TrendingUp,
  Clock, Globe, Zap, Star, Award, BookOpen
} from 'lucide-react';
import Link from 'next/link';

const AIAutonomousLegalResearchAssistant: React.FC = () => {
  const features = [
    'Autonomous case law analysis',
    'Legal precedent identification',
    'Automated brief generation',
    'Multi-jurisdiction research',
    'Real-time legal updates',
    'Citation verification',
    'Legal document comparison',
    'Risk assessment scoring'
  ];

  const benefits = [
    'Reduce legal research time by 80%',
    'Improve case outcome accuracy',
    'Lower legal costs for clients',
    '24/7 autonomous operation',
    'Multi-language support',
    'Regulatory compliance tracking'
  ];

  const useCases = [
    'Law firms and legal departments',
    'Corporate compliance teams',
    'Government legal offices',
    'Legal research institutions',
    'Individual attorneys',
    'Legal tech startups'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      features: [
        'Basic case law analysis',
        'Legal precedent search',
        'Document comparison',
        'Email support',
        'Up to 100 cases/month'
      ]
    },
    {
      name: 'Professional',
      price: '$599/month',
      features: [
        'Advanced AI analysis',
        'Multi-jurisdiction research',
        'Automated brief generation',
        'Priority support',
        'Unlimited cases',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      features: [
        'Full autonomous operation',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="AI Autonomous Legal Research Assistant - Zion Tech Group"
        description="Advanced AI system that autonomously conducts legal research, analyzes case law, and generates comprehensive legal briefs with human-like reasoning capabilities."
        keywords={[
          'AI legal research',
          'autonomous legal assistant',
          'case law analysis',
          'legal AI',
          'legal technology',
          'Zion Tech Group'
        ]}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-purple-600 rounded-full">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous Legal Research Assistant
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Advanced AI system that autonomously conducts legal research, analyzes case law, and generates comprehensive legal briefs with human-like reasoning capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Legal Research Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI system operates independently, continuously learning and improving to provide the most accurate and comprehensive legal research available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in legal research with our autonomous AI system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your legal practice needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-lg shadow-lg border-2 ${
                  index === 1 ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  {index === 1 && (
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/quote"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Benefits Most?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Legal Research Assistant is designed for forward-thinking legal professionals and organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Legal Research?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join the future of legal technology with our autonomous AI research assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Get Started Today
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIAutonomousLegalResearchAssistant;