import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Database, Brain, Activity, 
  BookOpen, Zap, Target, Award, CheckCircle, ArrowRight,
  GraduationCap, Video, Globe, Shield
} from 'lucide-react';

const EducationSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'Learning Management Systems',
      description: 'Advanced LMS platforms with AI-powered personalization and analytics',
      features: [
        'Adaptive learning paths',
        'Progress tracking',
        'Interactive content delivery',
        'Assessment automation'
      ],
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI-Powered Tutoring',
      description: 'Intelligent tutoring systems that adapt to individual learning styles',
      features: [
        'Personalized learning experiences',
        'Real-time feedback and guidance',
        'Learning style adaptation',
        'Performance analytics'
      ],
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Virtual & Augmented Reality',
      description: 'Immersive learning experiences through VR/AR technology',
      features: [
        '3D learning environments',
        'Interactive simulations',
        'Virtual field trips',
        'Hands-on training'
      ],
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Educational Analytics',
      description: 'Comprehensive analytics for student performance and institutional insights',
      features: [
        'Student performance tracking',
        'Learning outcome analysis',
        'Institutional effectiveness metrics',
        'Predictive analytics'
      ],
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Improved student engagement and retention',
    'Personalized learning experiences',
    'Enhanced teaching effectiveness',
    'Better learning outcomes and achievement',
    'Data-driven educational decisions',
    'Scalable solutions for educational institutions'
  ];

  return (
    <Layout 
      title="Education Solutions - Zion Tech Group"
      description="Revolutionary AI-powered education solutions for personalized learning, virtual reality experiences, and educational analytics."
      keywords="edtech, learning management, AI tutoring, virtual reality, educational analytics, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Education Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transforming education with AI-powered solutions that personalize learning, 
                enhance engagement, and improve educational outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Education Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge technology solutions address the most critical challenges 
                in modern education and learning.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our education solutions deliver measurable results and transform 
                the way students learn and educators teach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading educational institutions that trust Zion Tech Group 
                to deliver innovative solutions that enhance learning experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EducationSolutions;