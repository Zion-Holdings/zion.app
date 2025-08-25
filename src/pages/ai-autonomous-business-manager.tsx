import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, Globe, Target } from 'lucide-react';

const AIAutonomousBusinessManager = () => {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous Decision Making',
      description: 'AI-powered business decisions based on real-time data and predictive analytics.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of business processes and KPIs.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Intelligent risk assessment and mitigation strategies for business operations.'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of business metrics with instant alerts and notifications.'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Automated task assignment and team performance management.'
    },
    {
      icon: BarChart3,
      title: 'Strategic Planning',
      description: 'Data-driven strategic planning and resource allocation optimization.'
    }
  ];

  const businessFunctions = [
    {
      title: 'Financial Management',
      description: 'Automated budgeting, forecasting, and financial performance tracking.',
      icon: '💰'
    },
    {
      title: 'Operations Management',
      description: 'Streamlined business processes and operational efficiency optimization.',
      icon: '⚙️'
    },
    {
      title: 'Customer Relationship',
      description: 'Intelligent customer insights and relationship management automation.',
      icon: '👥'
    },
    {
      title: 'Supply Chain',
      description: 'End-to-end supply chain visibility and optimization.',
      icon: '📦'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Autonomous Business Manager
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Your intelligent business companion that manages operations, optimizes performance, 
              and drives growth through autonomous decision-making and continuous improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Intelligent Business Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI manager provides comprehensive business oversight and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Functions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Comprehensive Business Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From finance to operations, our AI manager handles every aspect of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessFunctions.map((function_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{function_.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{function_.title}</h3>
                    <p className="text-gray-300">{function_.description}</p>
                  </div>
                </div>
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
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-3xl border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Automate Your Business Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of business management with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;