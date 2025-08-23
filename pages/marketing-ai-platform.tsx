import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Award, Clock, CheckCircle, Shield, Globe, Layers, FileText, BarChart3, TrendingUp } from 'lucide-react';

const MarketingAIPlatform: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Intelligent audience segmentation and targeting"
    },
    {
      icon: Zap,
      title: "Automated Campaigns",
      description: "AI-driven campaign creation and optimization"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep insights into customer behavior and preferences"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced analytics and performance optimization"
    }
  ];

  const capabilities = [
    "AI-powered audience targeting",
    "Automated campaign management",
    "Customer behavior analysis",
    "Predictive marketing insights",
    "Real-time optimization",
    "Multi-channel campaign orchestration"
  ];

  const benefits = [
    "Improved campaign performance",
    "Better customer engagement",
    "Reduced manual effort",
    "Data-driven decision making",
    "Increased ROI",
    "Personalized customer experiences"
  ];

  return (
    <Layout
      title="Marketing AI Platform - Zion Tech Group"
      description="Advanced marketing AI platform providing intelligent targeting, automated campaigns, and customer intelligence for data-driven marketing success."
      keywords="marketing AI, AI marketing, automated campaigns, customer intelligence, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 via-purple-900/20 to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Marketing AI Platform
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionize your marketing with our AI-powered platform, 
                featuring intelligent targeting, automated campaigns, and deep customer insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-semibold rounded-lg hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
                  Start Marketing AI
                </button>
                <button className="px-8 py-3 border border-fuchsia-500 text-fuchsia-400 font-semibold rounded-lg hover:bg-fuchsia-500 hover:text-white transition-all duration-200">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our marketing AI platform delivers comprehensive capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-fuchsia-500/20 rounded-xl p-6 hover:border-fuchsia-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced marketing AI capabilities that transform campaigns
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your marketing with AI-powered insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Ready for AI-Powered Marketing?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Transform your marketing with intelligent AI automation
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-semibold text-lg rounded-lg hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
                Start Marketing AI Journey
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MarketingAIPlatform;