import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, TrendingUp, Shield, Zap, Brain, 
  CheckCircle, ArrowRight, Star, Award, Heart, 
  BarChart3, MessageSquare, Clock, Globe
} from 'lucide-react';

const CustomerSuccess: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Customer Success',
      description: 'Intelligent automation that predicts customer needs and proactively addresses challenges',
      benefits: ['Predictive analytics', 'Automated onboarding', 'Proactive support']
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'Customer Health Scoring',
      description: 'Real-time monitoring of customer satisfaction and engagement metrics',
      benefits: ['Health scoring algorithms', 'Engagement tracking', 'Satisfaction monitoring']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Churn Prevention',
      description: 'Advanced algorithms that identify at-risk customers and trigger retention strategies',
      benefits: ['Risk assessment', 'Retention campaigns', 'Success metrics']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize every touchpoint in the customer experience',
      benefits: ['Journey analytics', 'Touchpoint optimization', 'Experience mapping']
    }
  ];

  const solutions = [
    {
      name: 'AI Customer Success Automation',
      href: '/ai-customer-success-automation',
      description: 'Automate customer success workflows with AI intelligence',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Customer Health Scoring Platform',
      href: '/customer-health-scoring',
      description: 'AI-powered customer health analysis and scoring',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: 'Churn Prediction Platform',
      href: '/churn-prediction-platform',
      description: 'Predict and prevent customer churn with machine learning',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      name: 'Customer Journey Mapping',
      href: '/customer-journey-mapping',
      description: 'Visualize and optimize customer experiences',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Success Metric Tracking',
      href: '/success-metric-tracking',
      description: 'Track and analyze customer success metrics',
      icon: <Target className="w-6 h-6" />
    },
    {
      name: 'Automated Onboarding',
      href: '/automated-onboarding',
      description: 'Streamline customer onboarding processes',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Retention Rate' },
    { number: '40%', label: 'Reduction in Churn' },
    { number: '3.2x', label: 'Faster Onboarding' },
    { number: '89%', label: 'Customer Satisfaction' }
  ];

  return (
    <Layout>
      <Head>
        <title>Customer Success | Zion Tech Group</title>
        <meta name="description" content="Transform your customer success with AI-powered automation, health scoring, and churn prevention strategies." />
        <meta name="keywords" content="customer success, AI automation, churn prevention, customer health scoring, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/customer-success" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Customer Success
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your customer relationships with AI-powered automation, intelligent health scoring, 
                and proactive churn prevention strategies that drive growth and loyalty.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Customer Success Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform delivers measurable results through intelligent automation 
                and data-driven insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Success Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of customer success tools and platforms.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.a
                  key={index}
                  href={solution.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 hover:bg-black/60"
                >
                  <div className="flex items-center gap-3 text-cyan-300 mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.icon}
                    <span className="font-semibold">{solution.name}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading companies that have revolutionized their customer relationships 
                with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/demo"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CustomerSuccess;