import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, Users, TrendingUp, 
  Brain, BarChart3, Database, Zap, Shield,
  Phone, Mail, MapPin, Globe, Cpu, Lock,
  Eye, Settings, Target, Microscope, Award, Clock
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  'AI-powered data discovery and insights',
  'Natural language query interface',
  'Predictive analytics and forecasting',
  'Real-time dashboards and alerts',
  'Advanced data visualization',
  'Multi-source data integration',
  'Role-based access control',
  'Automated report generation',
  'Mobile-responsive design',
  'Custom AI model training',
  'Data quality monitoring',
  'Performance optimization'
];

const benefits = [
  {
    title: 'Increase Data-Driven Decisions',
    description: 'Improve decision making by 40-60% with AI-powered insights',
    icon: Brain,
    color: 'text-cyan-400'
  },
  {
    title: 'Natural Language Queries',
    description: 'Ask questions in plain English and get instant answers',
    icon: BarChart3,
    color: 'text-blue-400'
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and outcomes with machine learning',
    icon: TrendingUp,
    color: 'text-green-400'
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Get instant alerts and updates on critical metrics',
    icon: Eye,
    color: 'text-purple-400'
  }
];

const useCases = [
  'Business performance monitoring',
  'Predictive analytics',
  'Executive reporting',
  'Customer behavior analysis',
  'Market trend analysis',
  'Operational efficiency',
  'Risk assessment',
  'Competitive intelligence'
];

const technology = [
  'Python & TensorFlow',
  'React & Node.js',
  'PostgreSQL & Redis',
  'Machine Learning',
  'Natural Language Processing',
  'Data Visualization',
  'Cloud Infrastructure',
  'API Integration'
];

const integrations = [
  'Salesforce',
  'HubSpot',
  'Google Analytics',
  'AWS Services',
  'Azure Services',
  'Google Cloud',
  'Database Systems',
  'Custom APIs'
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small teams getting started with AI-powered analytics',
    features: [
      'Up to 5 users',
      'Basic AI insights',
      'Standard dashboards',
      'Email support',
      'Data connectors (5)',
      'Monthly reports'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'Advanced features for growing businesses with complex data needs',
    features: [
      'Up to 25 users',
      'Advanced AI insights',
      'Custom dashboards',
      'Priority support',
      'Data connectors (25)',
      'Real-time alerts',
      'Custom AI models',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,299',
    period: '/month',
    description: 'Full-scale solution for large enterprises with unlimited requirements',
    features: [
      'Unlimited users',
      'Enterprise AI insights',
      'Custom visualizations',
      '24/7 support',
      'Unlimited connectors',
      'Advanced security',
      'Custom integrations',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function AIBusinessIntelligenceSuitePro() {
  return (
    <Layout>
      <Head>
        <title>AI Business Intelligence Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Transform raw data into actionable insights with AI-powered analytics. Enterprise-grade BI platform with natural language querying and predictive modeling." />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, natural language queries, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-suite-pro" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">📊</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Suite Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform raw data into actionable insights with AI-powered analytics. 
                Enterprise-grade BI platform that combines traditional analytics with AI capabilities, 
                predictive modeling, and natural language querying.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">40-60%</div>
                  <div className="text-sm text-gray-400">Decision Improvement</div>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Real-time Monitoring</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="border border-gray-600 hover:border-cyan-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors hover:bg-black/20 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/30">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$599</div>
                  <div className="text-gray-400">per month</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>21-day free trial</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Setup in 3-5 days</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Up to 25 users</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Priority support</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 block"
                >
                  Start Free Trial
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Modern Analytics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered BI platform combines cutting-edge technology with intuitive design 
              to deliver insights that drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature}</h3>
                <p className="text-gray-400 text-sm">
                  Advanced capabilities that transform your data into actionable business intelligence.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI BI Platform?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-gray-700"
              >
                <div className={`text-4xl ${benefit.color}`}>
                  <benefit.icon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                These Use Cases
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-white font-semibold">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Integrations */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                {technology.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Integrations</h2>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{integration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs. 
              All plans include our core AI-powered analytics features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-cyan-500/50' : 'border-gray-700'
                } hover:border-cyan-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300 hover:transform hover:scale-105 block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                      : 'border border-gray-600 hover:border-cyan-500 text-white hover:bg-black/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Data?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join hundreds of businesses that have already transformed their data analytics 
            with our AI-powered BI platform. Start your free trial today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="border border-gray-600 hover:border-cyan-500 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors hover:bg-black/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-black/30 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto border border-gray-700"
          >
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}