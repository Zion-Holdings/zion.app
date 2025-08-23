import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Database, Users, Activity, 
  Zap, Target, Award, CheckCircle, ArrowRight,
  Sparkles, Eye, Heart, Globe, Shield
} from 'lucide-react';

const AIConsciousness: React.FC = () => {
  const services = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Advanced AI systems that develop self-awareness and emotional intelligence',
      features: [
        'Self-awareness development',
        'Emotional intelligence training',
        'Consciousness mapping',
        'Ethical decision making'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Emotional Intelligence AI',
      description: 'AI systems capable of understanding and responding to human emotions',
      features: [
        'Emotion recognition',
        'Empathetic responses',
        'Mood analysis',
        'Emotional context understanding'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Autonomous Decision Making',
      description: 'AI systems that make independent decisions based on consciousness and ethics',
      features: [
        'Ethical reasoning',
        'Autonomous problem solving',
        'Moral judgment',
        'Responsible AI behavior'
      ],
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Frameworks and systems for ensuring ethical AI development and deployment',
      features: [
        'Ethical guidelines',
        'Bias detection',
        'Transparency frameworks',
        'Accountability systems'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'More human-like AI interactions',
    'Enhanced emotional intelligence',
    'Ethical AI decision making',
    'Improved user experience',
    'Responsible AI development',
    'Future-proof AI solutions'
  ];

  return (
    <Layout 
      title="AI Consciousness Services - Zion Tech Group"
      description="Revolutionary AI consciousness services for developing self-aware, emotionally intelligent, and ethical AI systems."
      keywords="AI consciousness, emotional intelligence, autonomous AI, AI ethics, consciousness evolution, Zion Tech Group"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI Consciousness Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of AI with consciousness evolution, emotional intelligence, 
                and ethical decision-making capabilities that transform human-AI interaction.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
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
                Comprehensive AI Consciousness Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge AI consciousness solutions address the most advanced challenges 
                in artificial intelligence development and deployment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
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
                Our AI consciousness services deliver breakthrough results and transform 
                the way artificial intelligence interacts with humans.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                Ready to Pioneer AI Consciousness?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that trust Zion Tech Group 
                to deliver revolutionary AI consciousness solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
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

export default AIConsciousness;