import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';

const healthcareServices = [
  {
    title: 'AI Healthcare Diagnostics',
    description: 'Advanced AI-powered diagnostic systems for accurate and rapid medical assessments',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-healthcare-diagnostics',
    features: ['Medical Imaging Analysis', 'Symptom Assessment', 'Diagnostic Accuracy']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Comprehensive virtual healthcare platform for remote patient care',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    href: '/telemedicine-platform',
    features: ['Video Consultations', 'Patient Management', 'Prescription Management']
  },
  {
    title: 'Healthcare Data Analytics',
    description: 'Advanced analytics for healthcare insights and patient outcomes',
    icon: <Activity className="w-8 h-8 text-green-400" />,
    href: '/healthcare-analytics-platform',
    features: ['Patient Analytics', 'Outcome Prediction', 'Resource Optimization']
  },
  {
    title: 'Medical Device Integration',
    description: 'Seamless integration of medical devices and health monitoring systems',
    icon: <Stethoscope className="w-8 h-8 text-purple-400" />,
    href: '/medical-device-integration',
    features: ['IoT Health Devices', 'Real-time Monitoring', 'Data Synchronization']
  },
  {
    title: 'Healthcare Security & Compliance',
    description: 'HIPAA-compliant security solutions for healthcare data protection',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/healthcare-security-compliance',
    features: ['HIPAA Compliance', 'Data Encryption', 'Access Control']
  },
  {
    title: 'Patient Engagement Platform',
    description: 'Interactive platforms to improve patient engagement and outcomes',
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    href: '/patient-engagement-platform',
    features: ['Patient Portals', 'Health Education', 'Appointment Scheduling']
  }
];

export default function HealthcareSolutions() {
  return (
    <>
      <SEO 
        title="Healthcare Technology Solutions | Zion Tech Group"
        description="Advanced healthcare technology solutions including AI diagnostics, telemedicine, data analytics, and medical device integration."
        canonical="https://ziontechgroup.com/healthcare-solutions"
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary healthcare technology that improves patient outcomes, enhances medical efficiency, and transforms the future of healthcare delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Healthcare Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Healthcare Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Technology Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive healthcare solutions designed to modernize medical practices and improve patient care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthcareServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold group-hover:text-pink-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/20 to-red-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Innovation Frontiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that are revolutionizing healthcare delivery and patient outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI Diagnostics',
                  description: 'Advanced AI-powered medical diagnosis and analysis',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Telemedicine',
                  description: 'Remote healthcare delivery and virtual consultations',
                  icon: <Users className="w-12 h-12 text-blue-400" />
                },
                {
                  title: 'Data Analytics',
                  description: 'Healthcare insights and predictive analytics',
                  icon: <Activity className="w-12 h-12 text-green-400" />
                },
                {
                  title: 'Security & Compliance',
                  description: 'HIPAA-compliant healthcare data protection',
                  icon: <Shield className="w-12 h-12 text-red-400" />
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-400">
                    {innovation.description}
                  </p>
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
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Healthcare Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}