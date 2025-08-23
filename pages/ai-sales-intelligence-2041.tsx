import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap, Users, Star, CheckCircle, DollarSign } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AISalesIntelligence2041: React.FC = () => {
  const features = [
    {
      title: 'Consciousness-Based Sales',
      description: 'AI that understands customer psychology and buying behavior',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Predictive Lead Scoring',
      description: 'Advanced algorithms that predict which leads will convert',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Intelligent Sales Automation',
      description: 'Automate repetitive tasks while maintaining personal touch',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Personalized Sales Strategies',
      description: 'Customized approaches for each prospect and opportunity',
      icon: <Target className="w-8 h-8 text-blue-400" />
    }
  ];

  const capabilities = [
    'Advanced lead qualification and scoring',
    'Predictive sales forecasting',
    'Intelligent pipeline management',
    'Automated follow-up sequences',
    'Customer behavior analysis',
    'Sales performance optimization',
    'Competitive intelligence insights',
    'Consciousness-driven sales coaching'
  ];

  const benefits = [
    'Increased conversion rates',
    'Higher average deal sizes',
    'Reduced sales cycle length',
    'Improved lead quality',
    'Better sales forecasting accuracy',
    'Enhanced customer relationships',
    'Increased sales team productivity',
    'Higher customer lifetime value'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary 2041 Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Sales Intelligence 2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your sales process with AI that understands customer consciousness. 
                Drive revenue growth with intelligent, personalized sales strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Boost Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  View Demo
                </motion.button>
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
                Revolutionary Sales Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Sales Intelligence platform combines consciousness-driven understanding 
                with advanced sales automation to maximize revenue and customer success.
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

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Sales Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides comprehensive sales intelligence capabilities 
                that transform how sales teams identify, engage, and close deals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {capabilities.slice(0, 4).map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {capabilities.slice(4).map((capability, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your sales performance and achieve measurable business results 
                with our AI-powered sales intelligence platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of sales with AI that understands customer consciousness. 
                Drive revenue growth and build stronger customer relationships.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Start Sales Transformation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AISalesIntelligence2041;