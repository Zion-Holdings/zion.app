import React from 'react';
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
  Smartphone,
  Monitor,
  Zap,
  Target
} from 'lucide-react';
import Link from 'next/link';

const healthcareSolutions = [
  {
    title: 'AI-Powered Diagnostics',
    description: 'Advanced AI algorithms for early disease detection and accurate diagnosis',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    features: [
      'Machine learning diagnostic models',
      'Medical image analysis',
      'Predictive health analytics',
      'Real-time patient monitoring'
    ],
    href: '/ai-healthcare-diagnostics'
  },
  {
    title: 'Healthcare Data Security',
    description: 'HIPAA-compliant data protection and privacy solutions',
    icon: <Shield className="w-8 h-8 text-green-400" />,
    features: [
      'End-to-end encryption',
      'Access control management',
      'Audit trail compliance',
      'Data breach prevention'
    ],
    href: '/healthcare-cybersecurity'
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure, scalable telemedicine solutions for remote healthcare',
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    features: [
      'Video consultation platform',
      'Electronic health records',
      'Prescription management',
      'Patient portal integration'
    ],
    href: '/telemedicine-platform'
  },
  {
    title: 'Medical IoT Solutions',
    description: 'Connected medical devices and IoT healthcare infrastructure',
    icon: <Activity className="w-8 h-8 text-purple-400" />,
    features: [
      'Wearable health monitors',
      'Smart medical devices',
      'Real-time data collection',
      'Predictive maintenance'
    ],
    href: '/medical-iot-solutions'
  },
  {
    title: 'Healthcare Analytics',
    description: 'Comprehensive healthcare data analytics and insights',
    icon: <Database className="w-8 h-8 text-orange-400" />,
    features: [
      'Population health analytics',
      'Clinical outcome analysis',
      'Resource optimization',
      'Quality improvement metrics'
    ],
    href: '/healthcare-analytics'
  },
  {
    title: 'Patient Experience Platform',
    description: 'Enhanced patient engagement and satisfaction solutions',
    icon: <Users className="w-8 h-8 text-pink-400" />,
    features: [
      'Patient engagement tools',
      'Appointment scheduling',
      'Health education content',
      'Feedback management'
    ],
    href: '/patient-experience-platform'
  }
];

const HealthcareSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Healthcare Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transforming healthcare delivery through cutting-edge technology, AI, and secure infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI diagnostics to secure telemedicine platforms, we provide end-to-end healthcare technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Zap className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Learn More
                  <Target className="w-4 h-4 ml-2" />
                </Link>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations in leveraging cutting-edge technology for better patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/resources" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;