import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
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
  TrendingUp,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const HealthcareSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI algorithms for early disease detection and accurate diagnosis',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ['Machine learning diagnostics', 'Image recognition', 'Predictive analytics', 'Real-time monitoring'],
      href: '/ai-healthcare-diagnostics'
    },
    {
      title: 'Healthcare Data Security',
      description: 'HIPAA-compliant data protection and privacy solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['HIPAA compliance', 'Data encryption', 'Access control', 'Audit trails'],
      href: '/healthcare-data-security'
    },
    {
      title: 'Patient Management Systems',
      description: 'Comprehensive patient care and management platforms',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      features: ['Electronic health records', 'Patient portals', 'Appointment scheduling', 'Care coordination'],
      href: '/patient-management-systems'
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Secure video conferencing and remote care solutions',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: ['Video consultations', 'Secure messaging', 'Remote monitoring', 'Mobile apps'],
      href: '/telemedicine-platforms'
    },
    {
      title: 'Medical IoT Solutions',
      description: 'Connected medical devices and wearables integration',
      icon: <Activity className="w-8 h-8 text-orange-400" />,
      features: ['Device integration', 'Real-time data', 'Predictive maintenance', 'Remote monitoring'],
      href: '/medical-iot-solutions'
    },
    {
      title: 'Healthcare Analytics',
      description: 'Data-driven insights for improved patient outcomes',
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      features: ['Population health analytics', 'Clinical decision support', 'Performance metrics', 'Risk assessment'],
      href: '/healthcare-analytics'
    }
  ];

  const benefits = [
    'Improved patient outcomes through AI-powered diagnostics',
    'Enhanced data security and HIPAA compliance',
    'Streamlined healthcare operations and workflows',
    'Better patient engagement and satisfaction',
    'Reduced healthcare costs and inefficiencies',
    'Real-time monitoring and preventive care'
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
                <Heart className="w-16 h-16 text-red-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing healthcare delivery with cutting-edge AI, secure data management, 
                and innovative patient care solutions for the modern medical landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Healthcare Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/market-pricing"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
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
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered diagnostics to secure patient data management, 
                we provide end-to-end healthcare technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
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
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
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
                We combine cutting-edge technology with deep healthcare expertise 
                to deliver solutions that truly make a difference.
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
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our healthcare technology solutions can 
                revolutionize your medical practice or healthcare organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Healthcare Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
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

export default HealthcareSolutions;