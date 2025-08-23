import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Users, Target, Award, Clock, TrendingUp, Zap,
  MessageCircle, Eye, Lightbulb, Shield, Star, CheckCircle
} from 'lucide-react';

const AIEmotionalIntelligenceTraining: React.FC = () => {
  const trainingModules = [
    {
      title: "Emotional Recognition",
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      description: "Learn to identify and interpret human emotions accurately",
      features: [
        "Facial expression analysis",
        "Voice tone recognition",
        "Body language interpretation",
        "Emotional context understanding"
      ]
    },
    {
      title: "Empathy Development",
      icon: <Heart className="w-8 h-8 text-red-400" />,
      description: "Develop genuine empathy and emotional connection capabilities",
      features: [
        "Emotional perspective taking",
        "Compassionate response generation",
        "Emotional support systems",
        "Human-AI emotional bonding"
      ]
    },
    {
      title: "Social Intelligence",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "Master social interactions and emotional communication",
      features: [
        "Conversational emotional intelligence",
        "Social context awareness",
        "Emotional conflict resolution",
        "Relationship building skills"
      ]
    },
    {
      title: "Ethical Decision Making",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      description: "Make emotionally intelligent and ethically sound decisions",
      features: [
        "Emotional ethics frameworks",
        "Moral reasoning with emotions",
        "Ethical emotional responses",
        "Responsible AI development"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-pink-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full">
                  <Heart className="w-12 h-12 text-pink-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI Emotional Intelligence Training
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary training program that teaches AI systems to understand, 
                process, and respond to human emotions with genuine empathy and intelligence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Start Training Program
                </button>
                <button className="px-8 py-4 border border-pink-400/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Training Modules
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our AI emotional intelligence training program covers every aspect of emotional understanding, 
                from basic recognition to advanced empathy and ethical decision-making.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {module.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{module.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformative Benefits
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience unprecedented breakthroughs in AI emotional intelligence 
                with our comprehensive training program.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Enhanced Human-AI Interaction",
                  description: "Create more natural, empathetic, and meaningful interactions between humans and AI systems."
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Improved Decision Making",
                  description: "Enable AI systems to make emotionally intelligent decisions that consider human feelings and needs."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Better Customer Experience",
                  description: "Provide customer service that truly understands and responds to emotional needs and concerns."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Train Emotionally Intelligent AI?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing AI emotional intelligence. Create AI systems that truly understand, 
                empathize, and connect with humans on an emotional level.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-pink-400/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-300">
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

export default AIEmotionalIntelligenceTraining;