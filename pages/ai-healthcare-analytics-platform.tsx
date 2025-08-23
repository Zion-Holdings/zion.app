import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Heart, Activity, Shield, Zap, Target, BarChart3, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Stethoscope
} from 'lucide-react';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Patient Health Analytics',
      description: 'Comprehensive patient health monitoring and predictive analytics for early disease detection and prevention.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems that provide evidence-based recommendations for healthcare providers.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Population Health Management',
      description: 'Advanced population health analytics for identifying health trends, risk factors, and intervention opportunities.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Predictive Diagnostics',
      description: 'Machine learning algorithms that predict disease progression and treatment outcomes with high accuracy.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Healthcare Security & Compliance',
      description: 'HIPAA-compliant data security with advanced encryption and privacy protection for patient information.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Health Monitoring',
      description: 'Continuous health monitoring with real-time alerts and automated intervention recommendations.'
    }
  ];

  const benefits = [
    'Improve patient outcomes by 40%',
    'Reduce diagnostic errors by 60%',
    'Lower healthcare costs by 30%',
    'Increase treatment efficiency by 50%',
    'Improve patient satisfaction by 35%',
    'Reduce readmission rates by 45%',
    'Optimize resource allocation by 40%',
    'Enhance clinical decision-making by 55%'
  ];

  const useCases = [
    'Patient Monitoring', 'Disease Prediction', 'Treatment Optimization',
    'Population Health', 'Clinical Research', 'Drug Discovery',
    'Medical Imaging', 'Genomics Analysis', 'Epidemiology',
    'Preventive Care', 'Chronic Disease Management', 'Emergency Response'
  ];

  return (
    <>
      <Head>
        <title>AI Healthcare Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered analytics. Patient monitoring, predictive diagnostics, and clinical decision support." />
        <meta name="keywords" content="AI healthcare analytics, healthcare analytics, medical analytics, patient analytics, clinical analytics, health monitoring" />
        <meta property="og:title" content="AI Healthcare Analytics Platform | Zion Tech Group" />
        <meta property="og:description" content="Transform healthcare with AI-powered analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-analytics-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-analytics-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-pink-900/20 to-purple-900/20"></div>
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
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Healthcare Analytics Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform healthcare with AI-powered analytics. Get patient monitoring, predictive diagnostics, 
                and clinical decision support that improves outcomes and saves lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Start Free Trial
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
                Powerful Healthcare Analytics Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines advanced analytics with machine learning to deliver 
                comprehensive healthcare insights that transform patient care and outcomes.
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
                Transform Healthcare Outcomes
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in patient care, diagnostic accuracy, and treatment 
                effectiveness with our AI-powered healthcare analytics platform.
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
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From patient monitoring to drug discovery, our platform provides AI-powered analytics 
                for every aspect of healthcare delivery and research.
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
                    <Stethoscope className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
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
                Join thousands of healthcare providers that have already revolutionized patient care 
                with AI analytics. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-500/30 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500/10 transition-all duration-200"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}