import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Cpu, Database, Users, Activity, 
  Zap, Target, Award, CheckCircle, ArrowRight,
  Satellite, Globe, Brain, Shield
} from 'lucide-react';

const SpaceTechnology: React.FC = () => {
  const services = [
    {
      title: 'Satellite Technology',
      description: 'Advanced satellite systems and space infrastructure solutions',
      features: [
        'Satellite design and development',
        'Ground station systems',
        'Orbital mechanics',
        'Space communications'
      ],
      icon: Satellite,
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Space Resource Intelligence',
      description: 'AI-powered analysis of space resources and exploration data',
      features: [
        'Resource mapping',
        'Exploration planning',
        'Data analysis',
        'Predictive modeling'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Space Communications',
      description: 'Secure and reliable space communication networks',
      features: [
        'Deep space communications',
        'Satellite networks',
        'Signal processing',
        'Interference mitigation'
      ],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Space Security',
      description: 'Advanced security solutions for space operations',
      features: [
        'Cybersecurity for space',
        'Threat detection',
        'Secure communications',
        'Risk assessment'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'Access to space resources',
    'Advanced exploration capabilities',
    'Secure space communications',
    'Innovative space solutions',
    'Competitive space advantage',
    'Future space technology'
  ];

  return (
    <Layout 
      title="Space Technology Services - Zion Tech Group"
      description="Revolutionary space technology services for satellite systems, space communications, and space resource intelligence."
      keywords="space technology, satellite systems, space communications, space resources, Zion Tech Group"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Space Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of space exploration with cutting-edge technology solutions 
                that enable satellite systems, space communications, and resource intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300"
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

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge space technology solutions address the most advanced challenges 
                in space exploration and satellite operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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
                Our space technology services deliver breakthrough results and transform 
                the way organizations approach space exploration and satellite operations.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading space organizations that trust Zion Tech Group 
                to deliver revolutionary space technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300"
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

export default SpaceTechnology;