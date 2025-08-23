import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, Database, TrendingUp, Brain, 
  Globe, Cpu, Network, ArrowRight, CheckCircle, 
  Star, Zap, Users, Target, PieChart
} from 'lucide-react';
import Link from 'next/link';

const DataAnalytics: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const analyticsServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure',
      features: ['ETL/ELT Processes', 'Data Warehousing', 'Real-time Streaming', 'Data Quality Management'],
      price: 'From $4,500/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights',
      features: ['Interactive Dashboards', 'KPI Monitoring', 'Report Automation', 'Data Visualization'],
      price: 'From $3,500/month'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Leverage AI and ML for predictive insights',
      features: ['Predictive Modeling', 'Machine Learning', 'Statistical Analysis', 'Forecasting'],
      price: 'From $6,000/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Monitor and optimize business performance',
      features: ['Real-time Monitoring', 'Performance Metrics', 'Alert Systems', 'Optimization'],
      price: 'From $2,500/month'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with distributed computing',
      features: ['Hadoop/Spark', 'NoSQL Databases', 'Data Lakes', 'Scalable Processing'],
      price: 'From $5,500/month'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction', 'Personalization'],
      price: 'From $4,000/month'
    }
  ];

  const technologies = [
    { name: 'Apache Spark', logo: '⚡', description: 'Big Data Processing' },
    { name: 'Tableau', logo: '📊', description: 'Data Visualization' },
    { name: 'Python', logo: '🐍', description: 'Analytics & ML' },
    { name: 'Snowflake', logo: '❄️', description: 'Data Warehouse' },
    { name: 'TensorFlow', logo: '🧠', description: 'Machine Learning' },
    { name: 'Kafka', logo: '📡', description: 'Real-time Streaming' }
  ];

  const benefits = [
    'Data-Driven Decisions',
    'Real-time Insights',
    'Predictive Capabilities',
    'Cost Optimization',
    'Competitive Advantage',
    'Scalable Solutions'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Data & Analytics Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Transform your business with intelligent data solutions that drive insights, automation, and growth
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Start Analytics Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Analytics Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data engineering to advanced analytics, we provide end-to-end solutions that unlock the power of your data
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {analyticsServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-green-600">{service.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest tools and technologies to deliver powerful analytics solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-100 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{tech.logo}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics Benefits
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Transform your business with data-driven insights and intelligent automation
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our analytics solutions can transform your business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get Analytics Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DataAnalytics;