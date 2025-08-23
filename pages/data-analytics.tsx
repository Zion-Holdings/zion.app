import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, BarChart3, Code, Rocket, Brain, TrendingUp, PieChart, Activity, Shield } from 'lucide-react';
import Link from 'next/link';

const DataAnalyticsPage: React.FC = () => {
  const services = [
    {
      title: 'Big Data Processing',
      description: 'Scalable data processing solutions for massive datasets',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Distributed Computing',
        'Real-time Stream Processing',
        'Batch Processing',
        'Data Pipeline Automation',
        'Scalable Storage Solutions',
        'Performance Optimization'
      ],
      href: '/data-pipeline-health'
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        'Interactive Dashboards',
        'Custom Reports',
        'KPI Monitoring',
        'Data Visualization',
        'Ad-hoc Analysis',
        'Automated Reporting'
      ],
      href: '/ai-autonomous-business-operations'
    },
    {
      title: 'Machine Learning Analytics',
      description: 'AI-powered analytics and predictive modeling',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Systems',
        'Natural Language Processing',
        'Computer Vision Analytics'
      ],
      href: '/ai-autonomous-ecosystem'
    },
    {
      title: 'Real-time Analytics',
      description: 'Instant insights from live data streams',
      icon: <Activity className="w-8 h-8" />,
      features: [
        'Live Data Monitoring',
        'Real-time Dashboards',
        'Stream Processing',
        'Instant Alerts',
        'Performance Metrics',
        'Operational Intelligence'
      ],
      href: '/status-pages-slo'
    }
  ];

  const solutions = [
    {
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Data Governance',
      description: 'Comprehensive data quality and compliance management',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Data Integration',
      description: 'Seamless data connectivity across systems',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights through statistical analysis',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your data into actionable insights with advanced analytics and AI-powered solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-indigo-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-xl hover:bg-indigo-500/10 transition-all duration-200 font-medium text-lg"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive Data Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From data collection to insights delivery, we provide end-to-end data analytics solutions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-6 text-center hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-4">
                {solution.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-400 text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Analytics Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Advanced Analytics Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technology for powerful data insights and visualization
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Live Data Streaming</li>
              <li>Instant Insights</li>
              <li>Real-time Dashboards</li>
              <li>Performance Monitoring</li>
              <li>Alert Systems</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-6">
              <PieChart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Data Visualization</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Interactive Charts</li>
              <li>Custom Dashboards</li>
              <li>3D Visualizations</li>
              <li>Mobile Responsive</li>
              <li>Export Capabilities</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Predictive Models</li>
              <li>Pattern Recognition</li>
              <li>Automated Insights</li>
              <li>Natural Language</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our data analytics experts are ready to help you transform raw data into actionable insights that drive business growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-indigo-500/25"
            >
              Start Data Analysis
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-xl hover:bg-indigo-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Analytics Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalyticsPage;