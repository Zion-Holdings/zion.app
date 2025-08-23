import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Database, 
  Cloud, 
  Lock, 
  Activity, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  FileText,
  Eye,
  Key
} from 'lucide-react';
import Link from 'next/link';

const GovernmentTechnologySolutions: React.FC = () => {
  const solutions = [
    {
      title: 'Cybersecurity & Compliance',
      description: 'FedRAMP, FISMA, and CMMC compliant security solutions for government agencies',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['FedRAMP compliance', 'FISMA certification', 'CMMC readiness', 'Zero trust security'],
      href: '/government-cybersecurity'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure, scalable cloud solutions designed for government requirements',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      features: ['Government cloud', 'Hybrid solutions', 'Data sovereignty', 'Compliance ready'],
      href: '/government-cloud-infrastructure'
    },
    {
      title: 'Data Management & Analytics',
      description: 'Secure data platforms for government intelligence and decision-making',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      features: ['Data governance', 'Analytics platforms', 'AI insights', 'Compliance reporting'],
      href: '/government-data-analytics'
    },
    {
      title: 'Digital Identity & Access',
      description: 'Secure identity management and access control for government systems',
      icon: <Key className="w-8 h-8 text-cyan-400" />,
      features: ['Identity verification', 'Access management', 'Multi-factor auth', 'Audit trails'],
      href: '/government-identity-management'
    },
    {
      title: 'Citizen Services Platform',
      description: 'Digital transformation solutions for improved citizen engagement',
      icon: <Users className="w-8 h-8 text-orange-400" />,
      features: ['Digital services', 'Citizen portals', 'Mobile apps', 'Service automation'],
      href: '/citizen-services-platform'
    },
    {
      title: 'Emergency Response Systems',
      description: 'AI-powered emergency management and response coordination platforms',
      icon: <Activity className="w-8 h-8 text-red-400" />,
      features: ['Emergency coordination', 'Real-time monitoring', 'Resource management', 'Communication systems'],
      href: '/emergency-response-systems'
    }
  ];

  const benefits = [
    'Enhanced security and compliance with government standards',
    'Improved operational efficiency and cost reduction',
    'Better citizen services and engagement',
    'Enhanced data protection and privacy',
    'Scalable solutions for growing government needs',
    'Real-time monitoring and decision support'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Building2 className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Empowering government agencies with secure, compliant, and innovative 
                technology solutions for the digital government transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Government Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/market-pricing"
                  className="inline-flex items-center px-8 py-4 border border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Government Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cybersecurity compliance to citizen services, 
                we provide end-to-end government technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep government expertise 
                to deliver solutions that meet the highest security and compliance standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our government technology solutions can 
                revolutionize your agency's digital capabilities and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Government Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentTechnologySolutions;