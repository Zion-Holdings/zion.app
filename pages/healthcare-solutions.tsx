import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Heart, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function HealthcareSolutions() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI-powered diagnostic systems with unprecedented accuracy and speed for medical imaging and analysis.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Predictive Healthcare',
      description: 'Revolutionary predictive healthcare with AI algorithms that forecast health outcomes and prevent diseases.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Medicine',
      description: 'AI-driven personalized medicine with tailored treatment plans and medication optimization.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Patient Monitoring',
      description: 'Advanced patient monitoring with real-time health tracking and early warning systems.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Clinical Analytics',
      description: 'Comprehensive clinical analytics with AI-powered insights and treatment optimization.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Healthcare Access',
      description: 'Democratized healthcare access with AI-powered telemedicine and remote diagnostics.'
    }
  ];

  const benefits = [
    'Improve diagnostic accuracy by 90%',
    'Reduce treatment time by 60%',
    'Increase patient outcomes by 80%',
    'Reduce healthcare costs by 50%',
    'Enable early disease detection',
    'Optimize treatment plans',
    'Scale healthcare globally',
    'Future-proof medical technology'
  ];

  const useCases = [
    'Medical Diagnostics', 'Predictive Analytics', 'Personalized Medicine',
    'Patient Monitoring', 'Clinical Analytics', 'Treatment Optimization',
    'Drug Discovery', 'Medical Imaging', 'Telemedicine',
    'Healthcare Analytics', 'Preventive Care', 'Medical Research'
  ];

  return (
    <>
      <Head>
        <title>AI Healthcare Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics, predictive healthcare, and personalized medicine for better patient outcomes." />
        <meta name="keywords" content="AI healthcare solutions, medical diagnostics, predictive healthcare, personalized medicine, healthcare technology, medical AI" />
        <meta property="og:title" content="AI Healthcare Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/healthcare-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/healthcare-solutions" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-pink-900/20 to-rose-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-6">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize healthcare with AI-powered diagnostics, 
                predictive healthcare, and personalized medicine for better patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Transform Healthcare
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-500/30 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Healthcare Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with medical expertise to deliver 
                healthcare solutions that improve outcomes and save lives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-red-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Healthcare
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in diagnostic accuracy, treatment outcomes, and 
                patient care with our AI healthcare platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Healthcare Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From medical diagnostics to personalized medicine, our platform provides AI-powered 
                solutions for every aspect of healthcare and patient care.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-rose-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of healthcare providers leading the future of AI-powered medicine. 
                Be part of the healthcare revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Transform Healthcare
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-500/30 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
                >
                  Contact Healthcare Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}