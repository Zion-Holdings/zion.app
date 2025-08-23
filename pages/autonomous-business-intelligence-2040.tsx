import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Zap, Target, Star, CheckCircle, TrendingUp, Users, Shield, Globe, Cpu, Database } from 'lucide-react';

const AutonomousBusinessIntelligence2040: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: 'Autonomous Decision Making',
      description: 'AI systems that independently analyze data and make strategic business decisions'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: 'Real-time Analytics',
      description: 'Instant insights and analysis across all business operations and data sources'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Predictive Intelligence',
      description: 'Advanced forecasting and trend prediction for strategic planning'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Strategic Optimization',
      description: 'Continuous optimization of business processes and resource allocation'
    }
  ];

  const benefits = [
    'Faster decision-making processes',
    'Improved operational efficiency',
    'Enhanced competitive advantage',
    'Reduced human error in analysis',
    '24/7 business intelligence monitoring',
    'Data-driven strategic insights'
  ];

  const applications = [
    {
      title: 'Financial Analysis',
      description: 'Autonomous financial reporting, risk assessment, and investment recommendations',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Supply Chain Management',
      description: 'Intelligent optimization of supply chains and inventory management',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Customer Intelligence',
      description: 'Deep insights into customer behavior and personalized recommendations',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Operational Efficiency',
      description: 'Continuous monitoring and optimization of business operations',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const technologyStack = [
    'Advanced AI Decision Engines',
    'Real-time Data Processing',
    'Machine Learning Algorithms',
    'Predictive Analytics Models',
    'Natural Language Processing',
    'Automated Reporting Systems'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Revolutionary Business Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous Business Intelligence
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  2040
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of business intelligence with autonomous AI systems that 
                analyze, decide, and optimize your business operations 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                >
                  Get Started
                </a>
                <a
                  href="/it-services"
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous business intelligence platform delivers unprecedented capabilities 
                that redefine how businesses make decisions and optimize operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous BI?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of AI-driven business intelligence that 
                continuously optimizes and improves your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how autonomous business intelligence is revolutionizing industries 
                and transforming the way businesses operate and compete.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 text-emerald-400">{application.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the most cutting-edge AI and analytics technologies available in 2040, 
                ensuring unparalleled business intelligence and decision-making capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{tech}</span>
                </motion.div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the autonomous business intelligence revolution and discover what's possible 
                when AI continuously optimizes and improves your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                >
                  Start Your Journey
                </a>
                <a
                  href="/it-services"
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  Explore All Enterprise Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousBusinessIntelligence2040;