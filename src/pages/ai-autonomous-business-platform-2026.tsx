import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Shield, Zap, Users, BarChart3, Globe, Target } from 'lucide-react';

const AIAutonomousBusinessPlatform2026 = () => {
  const features = [
    {
      icon: Bot,
      title: 'Next-Gen Autonomous Operations',
      description: '2026-ready AI systems with advanced autonomous decision-making capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Intelligence',
      description: 'AI-powered forecasting and trend prediction for strategic business planning.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Quantum-resistant security protocols and intelligent threat detection systems.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous business process optimization with millisecond response times.'
    },
    {
      icon: Users,
      title: 'Intelligent Collaboration',
      description: 'Enhanced human-AI collaboration with natural language interfaces.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep learning analytics for comprehensive business insights and optimization.'
    }
  ];

  const platformFeatures = [
    {
      title: 'AI-Powered Decision Engine',
      description: 'Advanced decision-making algorithms that learn and adapt to your business needs.',
      icon: '🧠'
    },
    {
      title: 'Autonomous Process Management',
      description: 'Self-optimizing workflows that continuously improve efficiency and performance.',
      icon: '⚙️'
    },
    {
      title: 'Intelligent Resource Allocation',
      description: 'AI-driven resource optimization for maximum business value and efficiency.',
      icon: '📊'
    },
    {
      title: 'Predictive Business Intelligence',
      description: 'Forward-looking insights that help you stay ahead of market trends.',
      icon: '🔮'
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
              AI Autonomous Business Platform 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of business with our 2026-ready AI platform featuring 
              next-generation autonomous capabilities and intelligent business optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
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
              2026-Ready Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge capabilities designed for the future of autonomous business operations.
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

      {/* Platform Features Section */}
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
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive features that transform your business into an intelligent, autonomous operation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
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
              Ready for 2026?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience the future of autonomous business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
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

export default AIAutonomousBusinessPlatform2026;