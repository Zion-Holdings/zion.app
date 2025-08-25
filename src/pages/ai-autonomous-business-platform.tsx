import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, Globe, Target } from 'lucide-react';

const AIAutonomousBusinessPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous Operations',
      description: 'AI-powered systems that run your business operations independently and efficiently.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'Real-time analysis and optimization of business processes for maximum performance.'
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

  const platformModules = [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive analytics and reporting for informed decision-making.',
      icon: '📊'
    },
    {
      title: 'Process Automation',
      description: 'Streamlined workflows and automated business processes.',
      icon: '⚙️'
    },
    {
      title: 'Customer Management',
      description: 'Intelligent customer insights and relationship management.',
      icon: '👥'
    },
    {
      title: 'Financial Operations',
      description: 'Automated financial management and reporting systems.',
      icon: '💰'
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
              AI Autonomous Business Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The complete AI-powered platform that transforms your business into an autonomous, 
              intelligent, and highly efficient operation.
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
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need for autonomous business operations.
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

      {/* Platform Modules Section */}
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
              Integrated Platform Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive modules that work together to create a unified business platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{module.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of autonomous business operations with our AI platform.
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

export default AIAutonomousBusinessPlatform;