import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, Globe, Target } from 'lucide-react';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Fully Autonomous Operations',
      description: 'AI-powered systems that run your business operations 24/7 without human intervention.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'Real-time analysis and optimization of business processes for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'Advanced threat detection and automated response systems for business protection.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Millisecond response times for critical business decisions and operations.'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human teams.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-driven insights that predict trends and optimize business strategies.'
    }
  ];

  const businessAreas = [
    {
      title: 'Finance & Accounting',
      description: 'Automated financial reporting, budgeting, and compliance management.',
      icon: '💰',
      features: ['Automated bookkeeping', 'Real-time financial analysis', 'Compliance monitoring']
    },
    {
      title: 'Human Resources',
      description: 'AI-powered recruitment, performance management, and employee engagement.',
      icon: '👥',
      features: ['Smart candidate screening', 'Performance analytics', 'Employee satisfaction tracking']
    },
    {
      title: 'Supply Chain',
      description: 'Intelligent inventory management and logistics optimization.',
      icon: '📦',
      features: ['Demand forecasting', 'Route optimization', 'Supplier management']
    },
    {
      title: 'Customer Service',
      description: '24/7 automated customer support with human-like interactions.',
      icon: '🎧',
      features: ['Multi-language support', 'Issue resolution', 'Customer satisfaction tracking']
    },
    {
      title: 'Marketing & Sales',
      description: 'Automated lead generation, campaign management, and sales optimization.',
      icon: '📈',
      features: ['Lead scoring', 'Campaign automation', 'Sales forecasting']
    },
    {
      title: 'Operations',
      description: 'Streamlined business processes and workflow automation.',
      icon: '⚙️',
      features: ['Process optimization', 'Resource allocation', 'Performance monitoring']
    }
  ];

  const benefits = [
    {
      metric: '24/7',
      label: 'Operations',
      description: 'Round-the-clock business operations without downtime'
    },
    {
      metric: '90%',
      label: 'Efficiency Gain',
      description: 'Significant improvement in operational efficiency'
    },
    {
      metric: '60%',
      label: 'Cost Reduction',
      description: 'Substantial reduction in operational costs'
    },
    {
      metric: '100%',
      label: 'Compliance',
      description: 'Automated compliance monitoring and reporting'
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
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered autonomous operations that run 24/7, 
              continuously optimize performance, and drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
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

      {/* Benefits Section */}
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
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business with autonomous operations that deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{benefit.label}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Advanced Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with business intelligence to create truly autonomous operations.
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

      {/* Business Areas Section */}
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
              Comprehensive Business Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From finance to operations, our autonomous platform covers every aspect of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already running on autonomous operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;