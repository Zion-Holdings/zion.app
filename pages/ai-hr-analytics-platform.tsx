import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, BarChart3, TrendingUp, Shield, Zap, Target, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Briefcase
} from 'lucide-react';

export default function AIHRAnalyticsPlatform() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Employee Performance Analytics',
      description: 'Comprehensive performance tracking and analytics with AI-powered insights and recommendations.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Predictive HR Analytics',
      description: 'Forecast employee turnover, identify retention risks, and predict hiring needs with AI models.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Talent Acquisition Insights',
      description: 'Data-driven insights for recruitment optimization, candidate matching, and hiring success rates.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Employee Engagement Monitoring',
      description: 'Real-time monitoring of employee satisfaction, engagement levels, and workplace sentiment.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring, risk assessment, and regulatory reporting for HR operations.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Workforce Planning',
      description: 'AI-powered workforce planning with skills gap analysis and succession planning insights.'
    }
  ];

  const benefits = [
    'Reduce employee turnover by 30%',
    'Improve hiring success rates by 45%',
    'Increase employee engagement by 40%',
    'Reduce time-to-hire by 50%',
    'Optimize workforce planning by 60%',
    'Improve retention prediction accuracy by 80%',
    'Reduce HR operational costs by 35%',
    'Enhance decision-making with data-driven insights'
  ];

  const useCases = [
    'Performance Management', 'Talent Acquisition', 'Employee Retention',
    'Workforce Planning', 'Skills Gap Analysis', 'Succession Planning',
    'Employee Engagement', 'Compliance Monitoring', 'Risk Assessment',
    'Training & Development', 'Compensation Analysis', 'Diversity & Inclusion'
  ];

  return (
    <>
      <Head>
        <title>AI HR Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform HR with data-driven insights. AI-powered analytics for performance, retention, and strategic workforce planning." />
        <meta name="keywords" content="AI HR analytics, HR analytics, workforce analytics, employee analytics, talent analytics, HR insights" />
        <meta property="og:title" content="AI HR Analytics Platform | Zion Tech Group" />
        <meta property="og:description" content="Transform HR with data-driven insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-hr-analytics-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-hr-analytics-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI HR Analytics Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform HR with data-driven insights. AI-powered analytics for performance, retention, 
                and strategic workforce planning that drives organizational success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500/30 text-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-500/10 transition-all duration-200"
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
                Powerful HR Analytics Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines advanced analytics with machine learning to deliver 
                comprehensive HR insights that transform workforce management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-indigo-400">
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
                Transform Your HR Operations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in HR efficiency, employee retention, and strategic 
                decision-making with our AI-powered analytics platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
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
                Comprehensive HR Analytics Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From recruitment to retention, our platform provides AI-powered analytics for every 
                aspect of human resources management.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your HR Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of HR professionals that have already revolutionized their operations 
                with AI analytics. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500/30 text-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-500/10 transition-all duration-200"
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