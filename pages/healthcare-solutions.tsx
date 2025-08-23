import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Activity, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function HealthcareSolutions() {
  const healthcareServices = [
    {
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced AI-powered diagnostic tools for accurate medical assessments',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      href: '/healthcare-solutions',
      features: ['Real-time analysis', 'High accuracy rates', 'FDA compliant']
    },
    {
      title: 'Patient Data Management',
      description: 'Secure and compliant patient data management systems',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      href: '/healthcare-solutions',
      features: ['HIPAA compliant', 'End-to-end encryption', 'Audit trails']
    },
    {
      title: 'Telemedicine Platform',
      description: 'Advanced telemedicine solutions for remote healthcare delivery',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      href: '/healthcare-solutions',
      features: ['HD video calls', 'Secure messaging', 'Integration ready']
    },
    {
      title: 'Medical Imaging AI',
      description: 'AI-powered medical imaging analysis and interpretation',
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      href: '/healthcare-solutions',
      features: ['Radiology support', 'Pattern recognition', 'Diagnostic assistance']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Comprehensive healthcare data analytics and insights',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      href: '/healthcare-solutions',
      features: ['Predictive analytics', 'Performance metrics', 'ROI tracking']
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting systems',
      icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
      href: '/healthcare-solutions',
      features: ['Regulatory updates', 'Automated reporting', 'Risk assessment']
    }
  ];

  const benefits = [
    'Improved patient outcomes through AI-powered diagnostics',
    'Enhanced operational efficiency and reduced costs',
    'Compliance with healthcare regulations and standards',
    'Secure and scalable healthcare technology solutions',
    'Integration with existing healthcare systems',
    '24/7 support and maintenance services'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary healthcare technology solutions that improve patient care, enhance operational efficiency, and ensure compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 text-lg">
                Get Healthcare Solutions
              </Button>
              <Button href="/solutions" variant="outline" className="border-green-500 text-green-400 px-8 py-4 text-lg">
                View All Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our healthcare technology solutions are designed to address the unique challenges of modern healthcare delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Healthcare Technology Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to transform patient care and operational efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our healthcare technology experts help you implement solutions that improve patient care and operational efficiency
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 text-lg">
              Start Your Healthcare Transformation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}