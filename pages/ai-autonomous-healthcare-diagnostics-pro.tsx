import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Activity, Shield, 
  ArrowRight, CheckCircle, Users, TrendingUp,
  Clock, Globe, Zap, Star, Award, Microscope
} from 'lucide-react';
import Link from 'next/link';

const AIAutonomousHealthcareDiagnosticsPro: React.FC = () => {
  const features = [
    'Medical image analysis',
    'Patient data interpretation',
    'Symptom pattern recognition',
    'Treatment plan generation',
    'Risk assessment scoring',
    'Clinical decision support',
    'Real-time monitoring',
    'Predictive diagnostics'
  ];

  const benefits = [
    'Improve diagnostic accuracy by 85%',
    'Reduce diagnosis time by 70%',
    '24/7 autonomous operation',
    'Early disease detection',
    'Personalized treatment plans',
    'Reduced healthcare costs'
  ];

  const useCases = [
    'Hospitals and medical centers',
    'Diagnostic imaging facilities',
    'Primary care practices',
    'Specialist medical offices',
    'Telemedicine platforms',
    'Medical research institutions'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$799/month',
      features: [
        'Basic image analysis',
        'Patient data review',
        'Diagnostic suggestions',
        'Email support',
        'Up to 100 patients/month'
      ]
    },
    {
      name: 'Professional',
      price: '$1,599/month',
      features: [
        'Advanced AI diagnostics',
        'Multi-modality imaging',
        'Treatment recommendations',
        'Priority support',
        'Unlimited patients',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: '$3,999/month',
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
        title="AI Autonomous Healthcare Diagnostics Pro - Zion Tech Group"
        description="Advanced AI system that autonomously analyzes medical images, patient data, and symptoms to provide accurate diagnostic recommendations and treatment plans."
        keywords={[
          'AI healthcare diagnostics',
          'autonomous medical AI',
          'medical image analysis',
          'healthcare AI',
          'diagnostic technology',
          'Zion Tech Group'
        ]}
      />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
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
              <div className="p-4 bg-blue-600 rounded-full">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous Healthcare Diagnostics Pro
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Advanced AI system that autonomously analyzes medical images, patient data, and symptoms to provide accurate diagnostic recommendations and treatment plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
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
              Revolutionary Healthcare Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI system operates independently, continuously learning and improving to provide the most accurate and comprehensive medical diagnostics available.
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
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
              Transform Patient Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented accuracy and efficiency in medical diagnostics with our autonomous AI system.
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
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
              Choose the plan that best fits your healthcare facility's needs and scale as you grow.
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
                  index === 1 ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  {index === 1 && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/quote"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
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
              Our AI Healthcare Diagnostics Pro is designed for forward-thinking healthcare providers and institutions.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Patient Care?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join the future of healthcare diagnostics with our autonomous AI system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Get Started Today
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIAutonomousHealthcareDiagnosticsPro;