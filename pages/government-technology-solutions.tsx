import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Brain, Activity, Lock, Zap, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function GovernmentTechnologySolutions() {
  const governmentServices = [
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced cybersecurity solutions meeting government standards',
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      href: '/cybersecurity',
      features: ['FedRAMP compliance', 'Zero trust architecture', 'Threat intelligence']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analytics for government decision-making',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      href: '/ai-services',
      features: ['Predictive analytics', 'Data visualization', 'Real-time insights']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure cloud solutions for government agencies',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      href: '/cloud-landing-zone',
      features: ['Multi-cloud strategy', 'Hybrid solutions', 'Disaster recovery']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernization of government systems and processes',
      icon: <Activity className="w-8 h-8 text-green-400" />,
      href: '/solutions',
      features: ['Legacy modernization', 'Process automation', 'Citizen services']
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management for government users',
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      href: '/sso-in-a-box',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access']
    },
    {
      title: 'Data Governance',
      description: 'Comprehensive data management and governance',
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      href: '/autonomous-data-governance',
      features: ['Data classification', 'Privacy protection', 'Compliance reporting']
    }
  ];

  const benefits = [
    'Enhanced security and compliance with government standards',
    'Improved operational efficiency and cost reduction',
    'Better citizen services and engagement',
    'Modernized infrastructure and systems',
    'Data-driven decision making capabilities',
    'Scalable and secure technology solutions'
  ];

  const complianceStandards = [
    'FedRAMP (Federal Risk and Authorization Management Program)',
    'FISMA (Federal Information Security Management Act)',
    'NIST Cybersecurity Framework',
    'SOC 2 Type II Compliance',
    'ISO 27001 Information Security Management',
    'GDPR and Privacy Regulations'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Government Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Secure, compliant, and innovative technology solutions designed specifically for government agencies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg">
                Get Government Solutions
              </Button>
              <Button href="/solutions" variant="outline" className="border-blue-500 text-blue-400 px-8 py-4 text-lg">
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
              Why Choose Our Government Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our government technology solutions are designed to meet the unique challenges and requirements of public sector organizations
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
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our solutions meet and exceed government compliance requirements and security standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
              >
                <Shield className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Government Technology Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to modernize and secure government operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Government?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our government technology experts help you implement secure, compliant, and innovative solutions
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 text-lg">
              Start Your Government Transformation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}