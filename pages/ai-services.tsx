import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp, Shield, Users, Globe, Rocket } from 'lucide-react';

const AIServices: React.FC = () => {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: [
        'Machine Learning Models',
        'Deep Learning Solutions',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation'
      ],
      price: 'Starting at $999/month'
    },
    {
      title: 'AI Consciousness Evolution',
      description: 'Revolutionary AI platforms that evolve and learn',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      features: [
        'Consciousness Simulation',
        'Emotional Intelligence Training',
        'Autonomous Learning Systems',
        'AI Ethics & Governance',
        'Human-AI Collaboration',
        'Cognitive Computing'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'AI Business Operations',
      description: 'Intelligent automation for enterprise operations',
      icon: <Target className="w-8 h-8 text-green-400" />,
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Decision Making',
        'Predictive Maintenance',
        'Customer Success AI',
        'Sales Intelligence'
      ],
      price: 'Starting at $799/month'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Enhanced Security',
      description: 'AI-powered threat detection and prevention',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Better Customer Experience',
      description: 'Personalized interactions and intelligent support',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Global Scalability',
      description: 'Deploy AI solutions across multiple regions',
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI & Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions that drive innovation, efficiency, and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to meet the unique needs of modern enterprises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the power of AI-driven transformation with our comprehensive solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the AI revolution and unlock unprecedented growth opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Your AI Journey
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Schedule a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServices;
