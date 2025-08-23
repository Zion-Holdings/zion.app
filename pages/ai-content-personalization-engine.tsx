import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Users, Zap, Award, Clock, TrendingUp, Eye,
  Shield, Star, CheckCircle, Database, MessageSquare, Palette
} from 'lucide-react';

const AIContentPersonalizationEngine: React.FC = () => {
  const engineFeatures = [
    {
      title: "Intelligent Personalization",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "AI-powered algorithms that understand individual user preferences and behavior",
      features: [
        "Behavioral pattern analysis",
        "Preference learning algorithms",
        "Real-time personalization",
        "Contextual understanding"
      ]
    },
    {
      title: "Dynamic Content Generation",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      description: "Automatically generate and adapt content based on user preferences",
      features: [
        "Personalized content creation",
        "Dynamic text generation",
        "Adaptive messaging",
        "Multi-language support"
      ]
    },
    {
      title: "User Experience Optimization",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "Enhance user engagement through personalized experiences",
      features: [
        "Personalized recommendations",
        "Custom user interfaces",
        "Behavioral targeting",
        "Engagement optimization"
      ]
    },
    {
      title: "Analytics & Insights",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      description: "Comprehensive analytics to measure and improve personalization effectiveness",
      features: [
        "Performance tracking",
        "A/B testing automation",
        "Conversion optimization",
        "ROI measurement"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                  <Target className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Content Personalization Engine
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI engine that delivers personalized content experiences, 
                maximizing engagement and driving conversions through intelligent personalization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Explore Engine
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Engine Features */}
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
                Advanced Personalization Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our content personalization engine combines cutting-edge AI with comprehensive analytics 
                to deliver truly personalized experiences that drive results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feat}
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
                Experience unprecedented improvements in user engagement, 
                conversion rates, and customer satisfaction with personalized content.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Increased Engagement",
                  description: "Boost user engagement and time on site with content that resonates personally with each visitor."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Higher Conversions",
                  description: "Improve conversion rates by delivering the right content to the right person at the right time."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Better Customer Experience",
                  description: "Create memorable experiences that build customer loyalty and drive repeat business."
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
                Ready to Personalize Your Content?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of content personalization. Maximize engagement, 
                boost conversions, and create unforgettable user experiences with AI-powered personalization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
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

export default AIContentPersonalizationEngine;