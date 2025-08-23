import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, PieChart, TrendingUp, Database, Brain, 
  Zap, Globe, Target, CheckCircle, ArrowRight, Users,
  Rocket, Star, Cpu, Shield, Network, BarChart4, ShoppingCart, Truck, Heart
} from 'lucide-react';
import Link from 'next/link';

const DataAnalytics: React.FC = () => {
  const analyticsServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics platform with machine learning insights and predictive modeling',
      features: ['Predictive Analytics', 'Natural Language Queries', 'Auto-generated Insights', 'Real-time Dashboards'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Real-time Data Streaming',
      description: 'Process and analyze data in real-time with sub-millisecond latency',
      features: ['Stream Processing', 'Event-driven Architecture', 'Real-time Alerts', 'Live Dashboards'],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Big Data Processing',
      description: 'Handle petabytes of data with distributed computing and advanced algorithms',
      features: ['Distributed Computing', 'Scalable Storage', 'Advanced Algorithms', 'Cost Optimization'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning models',
      features: ['Time Series Analysis', 'Machine Learning Models', 'Scenario Planning', 'Risk Assessment'],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Visualization',
      description: 'Interactive charts and dashboards that bring your data to life',
      features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Mobile Responsive'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your organization',
      features: ['Data Quality', 'Security & Privacy', 'Compliance Tools', 'Audit Trails'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const platformFeatures = [
    {
      title: 'AI-Driven Insights',
      description: 'Machine learning algorithms automatically discover patterns and generate actionable insights',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Real-time Processing',
      description: 'Analyze data as it arrives with sub-millisecond latency for instant decision making',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Architecture',
      description: 'Handle any volume of data with auto-scaling infrastructure that grows with your needs',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance certifications',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Global Performance',
      description: 'Distributed infrastructure ensures fast performance regardless of user location',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Easy Integration',
      description: 'Connect to any data source with pre-built connectors and APIs',
      icon: <Network className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track customer behavior, optimize pricing, and increase conversion rates',
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: 'Financial Risk Analysis',
      description: 'Monitor market trends, assess risks, and optimize investment strategies',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Healthcare Analytics',
      description: 'Improve patient outcomes with predictive analytics and population health insights',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Manufacturing Optimization',
      description: 'Predict maintenance needs, optimize production, and reduce costs',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: 'Marketing Intelligence',
      description: 'Track campaign performance, understand customer segments, and optimize ROI',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Supply Chain Analytics',
      description: 'Monitor inventory levels, predict demand, and optimize logistics',
      icon: <Truck className="w-8 h-8" />
    }
  ];

  const dataSources = [
    'Databases (SQL, NoSQL)',
    'Cloud Storage (AWS S3, Azure Blob)',
    'APIs and Web Services',
    'IoT Devices and Sensors',
    'Social Media Platforms',
    'Email and Communication Tools',
    'CRM and ERP Systems',
    'Log Files and Metrics'
  ];

  const benefits = [
    {
      number: '300%',
      label: 'Faster Insights',
      description: 'Real-time processing delivers insights in seconds, not hours'
    },
    {
      number: '40%',
      label: 'Cost Reduction',
      description: 'Automated analytics reduce manual work and operational costs'
    },
    {
      number: '95%',
      label: 'Accuracy Improvement',
      description: 'AI-powered analysis reduces errors and improves decision quality'
    },
    {
      number: '24/7',
      label: 'Continuous Monitoring',
      description: 'Always-on analytics with automated alerts and notifications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your data into actionable insights with AI-powered analytics, real-time processing, 
              and predictive modeling. Make data-driven decisions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <BarChart3 className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <Brain className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Database className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Data Analytics Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven analytics with enterprise-grade performance and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics solutions designed for modern data challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our analytics platform powers insights across industries and business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect Any Data Source
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform integrates with all your existing data sources and systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={source}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <p className="text-gray-300 text-sm">{source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our analytics platform see measurable improvements across key metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{benefit.number}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with AI-powered analytics and real-time insights. 
              Start making data-driven decisions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;