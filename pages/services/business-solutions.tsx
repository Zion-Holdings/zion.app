import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Rocket, Star, CheckCircle, Briefcase, TrendingUp, BarChart3, Settings, Globe, Lightbulb } from 'lucide-react';

const BusinessSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development and market analysis'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamlined workflows and automated business processes'
    },
    {
      icon: Users,
      title: 'Team Optimization',
      description: 'Enhanced collaboration and productivity tools'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making and performance tracking'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of business tools and platforms'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Creative solutions for business challenges and growth'
    }
  ];

  const solutions = [
    'Micro SAAS platform development',
    'Business process automation',
    'Customer relationship management',
    'Supply chain optimization',
    'Financial planning and analysis',
    'Marketing automation and analytics'
  ];

  const benefits = [
    'Increased operational efficiency and productivity',
    'Reduced costs and improved profitability',
    'Enhanced customer experience and satisfaction',
    'Data-driven insights and decision making',
    'Scalable and flexible business solutions',
    'Competitive advantage in the market'
  ];

  return (
    <Layout
      title="Business Solutions - Zion Tech Group"
      description="Comprehensive business solutions including micro SAAS platforms, process automation, and strategic consulting to transform your business operations."
      keywords="business solutions, micro SAAS, business automation, process optimization, strategic consulting, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Business Solutions Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Business Solutions & Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your business operations with our comprehensive solutions including micro SAAS platforms, process automation, and strategic consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300">
                  Business Consultation
                </button>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Business Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our business solutions platform provides everything you need to optimize operations, increase efficiency, and drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/60 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Solutions We Offer
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored solutions designed to address your specific business challenges and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {solutions.slice(0, 3).map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{solution}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {solutions.slice(3).map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{solution}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Business Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience transformative business solutions that drive growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/40 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let us help you optimize operations, increase efficiency, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Start Transformation
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessSolutionsPage;