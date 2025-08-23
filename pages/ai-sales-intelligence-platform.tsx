import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Brain, Zap, Target, Award, Clock, Users, Eye,
  Shield, Star, CheckCircle, Database, MessageSquare, DollarSign
} from 'lucide-react';

const AISalesIntelligencePlatform: React.FC = () => {
  const platformFeatures = [
    {
      title: "Intelligent Lead Scoring",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "AI-powered lead scoring that identifies the most promising sales opportunities",
      features: [
        "Behavioral pattern analysis",
        "Predictive lead scoring",
        "Conversion probability",
        "Priority ranking algorithms"
      ]
    },
    {
      title: "Sales Process Optimization",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      description: "Optimize every step of the sales process with AI-driven insights and automation",
      features: [
        "Pipeline optimization",
        "Sales cycle analysis",
        "Process automation",
        "Performance tracking"
      ]
    },
    {
      title: "Customer Intelligence",
      icon: <Users className="w-8 h-8 text-green-400" />,
      description: "Deep insights into customer behavior, preferences, and buying patterns",
      features: [
        "Customer segmentation",
        "Behavioral analysis",
        "Preference prediction",
        "Engagement optimization"
      ]
    },
    {
      title: "Revenue Forecasting",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      description: "Accurate revenue predictions and sales forecasting with AI-powered analytics",
      features: [
        "Predictive modeling",
        "Trend analysis",
        "Risk assessment",
        "Scenario planning"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-emerald-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                  <TrendingUp className="w-12 h-12 text-green-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
                AI Sales Intelligence Platform
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered platform that transforms sales operations, 
                maximizes revenue, and drives intelligent decision-making across your sales team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Explore Platform
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
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
                Advanced Platform Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our sales intelligence platform combines cutting-edge AI with comprehensive analytics 
                to revolutionize how you manage and optimize your sales operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300"
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
                Experience unprecedented improvements in sales performance, 
                revenue growth, and team productivity with AI-powered sales intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8 text-green-400" />,
                  title: "Increased Revenue",
                  description: "Boost sales performance and revenue growth through intelligent lead prioritization and process optimization."
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Improved Efficiency",
                  description: "Maximize sales team productivity with automated processes and intelligent insights."
                },
                {
                  icon: <Target className="w-8 h-8 text-blue-400" />,
                  title: "Better Conversion Rates",
                  description: "Improve conversion rates through targeted approaches and predictive analytics."
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
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of sales intelligence. Maximize revenue, 
                boost efficiency, and drive growth with AI-powered sales optimization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
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

export default AISalesIntelligencePlatform;