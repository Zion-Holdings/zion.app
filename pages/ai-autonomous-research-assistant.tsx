import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Brain, Zap, Target, Award, Clock, TrendingUp, 
  BookOpen, Database, Globe, Star, CheckCircle, 
  Shield, Users, Settings, Activity
} from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  const assistantFeatures = [
    {
      title: "Intelligent Research Automation",
      icon: <Search className="w-8 h-8 text-blue-400" />,
      description: "AI-powered research automation that discovers, analyzes, and synthesizes information autonomously",
      features: [
        "Automated data collection",
        "Intelligent source analysis",
        "Pattern recognition",
        "Cross-reference validation"
      ]
    },
    {
      title: "Advanced Data Processing",
      icon: <Database className="w-8 h-8 text-green-400" />,
      description: "Process and analyze vast amounts of data with intelligent filtering and categorization",
      features: [
        "Big data processing",
        "Intelligent filtering",
        "Data categorization",
        "Quality assessment"
      ]
    },
    {
      title: "Predictive Insights",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "Generate predictive insights and identify emerging trends through advanced analytics",
      features: [
        "Trend prediction",
        "Pattern analysis",
        "Future forecasting",
        "Risk assessment"
      ]
    },
    {
      title: "Collaborative Research",
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      description: "Facilitate collaborative research with intelligent coordination and knowledge sharing",
      features: [
        "Team coordination",
        "Knowledge sharing",
        "Progress tracking",
        "Collaboration tools"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <Search className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Autonomous Research Assistant
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered research assistant that autonomously discovers, analyzes, 
                and synthesizes information to accelerate research and drive breakthrough insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Explore Assistant
                </button>
                <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assistant Features */}
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
                Advanced Research Capabilities
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our autonomous research assistant combines cutting-edge AI with comprehensive 
                research methodologies to revolutionize how you discover and analyze information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {assistantFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
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
                Experience unprecedented improvements in research efficiency, 
                discovery speed, and insight quality with AI-powered autonomous research.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Faster Research",
                  description: "Accelerate research timelines with automated discovery and analysis."
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "Deeper Insights",
                  description: "Uncover deeper insights through intelligent pattern recognition and analysis."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "Higher Quality",
                  description: "Improve research quality with comprehensive validation and cross-referencing."
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
                Ready to Accelerate Your Research?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of autonomous research. Accelerate discovery, 
                enhance insights, and drive breakthroughs with AI-powered research assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
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

export default AIAutonomousResearchAssistant;