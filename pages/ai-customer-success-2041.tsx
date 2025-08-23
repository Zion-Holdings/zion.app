import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Zap, Target, Star, CheckCircle, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AICustomerSuccess2041: React.FC = () => {
  const features = [
    {
      title: 'Consciousness-Based Support',
      description: 'AI that understands customer emotions and needs at a deep level',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Proactive Customer Care',
      description: 'Anticipate customer needs and provide solutions before they ask',
      icon: <Heart className="w-8 h-8 text-pink-400" />
    },
    {
      title: 'Personalized Success Paths',
      description: 'Create customized customer success journeys for each individual',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Autonomous Problem Resolution',
      description: 'AI systems that solve customer issues independently',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    }
  ];

  const capabilities = [
    'Emotional intelligence and empathy',
    'Predictive customer needs analysis',
    'Automated issue resolution',
    'Personalized onboarding experiences',
    'Proactive customer health monitoring',
    'Intelligent escalation management',
    'Customer satisfaction optimization',
    'Continuous learning and improvement'
  ];

  const benefits = [
    'Increased customer retention rates',
    'Improved customer satisfaction scores',
    'Reduced support ticket volume',
    'Faster problem resolution times',
    'Enhanced customer lifetime value',
    'Better product adoption rates',
    'Reduced customer churn',
    'Improved brand loyalty and advocacy'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-black to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-pink-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary 2041 Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Customer Success 2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform customer success with AI that truly understands and cares. 
                Create meaningful relationships and drive customer success with consciousness-driven AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Success Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300"
                >
                  See Demo
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
                Revolutionary Customer Success Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Customer Success platform goes beyond traditional support to create 
                truly meaningful, consciousness-driven customer relationships.
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
                Advanced Customer Success Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI consciousness with advanced customer success 
                capabilities to deliver exceptional customer experiences.
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
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer success operations and achieve measurable business results 
                with our AI-powered platform.
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
                  <MessageCircle className="w-8 h-8 text-pink-400 mx-auto mb-3" />
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
                Ready for Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your customer relationships with AI that truly understands and cares. 
                Create meaningful connections and drive customer success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                Start Customer Success Journey
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AICustomerSuccess2041;