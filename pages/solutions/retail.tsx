import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Database, Users, Activity, 
  Brain, Zap, Target, Award, CheckCircle, ArrowRight,
  CreditCard, BarChart3, Smartphone, Shield
} from 'lucide-react';

const RetailSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'E-commerce Platform Solutions',
      description: 'Modern, scalable e-commerce platforms with advanced features and optimization',
      features: [
        'Multi-channel selling',
        'Mobile-first design',
        'Payment gateway integration',
        'Inventory management'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-Powered Personalization',
      description: 'Intelligent product recommendations and personalized shopping experiences',
      features: [
        'Product recommendation engines',
        'Behavioral analytics',
        'Dynamic pricing',
        'Personalized marketing'
      ],
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Omnichannel Customer Experience',
      description: 'Seamless customer experience across all touchpoints and channels',
      features: [
        'Unified customer profiles',
        'Cross-channel consistency',
        'Real-time inventory sync',
        'Customer journey mapping'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Retail Analytics & Insights',
      description: 'Comprehensive analytics for data-driven retail decisions and optimization',
      features: [
        'Sales performance analytics',
        'Customer behavior insights',
        'Market trend analysis',
        'Predictive analytics'
      ],
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Increased sales and conversion rates',
    'Enhanced customer engagement and loyalty',
    'Improved operational efficiency',
    'Better inventory management and forecasting',
    'Data-driven business decisions',
    'Scalable solutions for business growth'
  ];

  return (
    <Layout 
      title="Retail & E-commerce Solutions - Zion Tech Group"
      description="Revolutionary AI-powered retail solutions for e-commerce optimization, customer personalization, and omnichannel experiences."
      keywords="e-commerce, retail AI, customer personalization, omnichannel, retail analytics, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Retail & E-commerce Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transforming retail with AI-powered solutions that optimize e-commerce, 
                enhance customer experiences, and drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Retail Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge technology solutions address the most critical challenges 
                in modern retail and e-commerce operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our retail solutions deliver measurable results and transform 
                the way businesses engage with customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Retail?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading retail companies that trust Zion Tech Group 
                to deliver innovative solutions that drive customer engagement and sales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RetailSolutions;