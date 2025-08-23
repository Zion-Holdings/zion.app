import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Database, Brain, Target, Users, BarChart3, CheckCircle, ArrowRight, Star, Globe, Cpu, Shield, Rocket, Clock, TrendingUp, PieChart, LineChart, Activity, Zap, Eye, UserCheck, Calendar, Mail, Phone } from 'lucide-react';

const AIPoweredSalesCRM: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Smart CRM",
      description: "Intelligent customer relationship management",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "AI-powered customer insights",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Lead Management",
      description: "Advanced lead tracking and scoring",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "Customer 360",
      description: "Complete customer view and history",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const crmFeatures = [
    "AI-powered lead scoring and qualification",
    "Intelligent customer segmentation",
    "Automated follow-up and nurturing",
    "Advanced pipeline management",
    "Real-time customer insights",
    "Seamless integration capabilities"
  ];

  const crmAreas = [
    {
      title: "Lead Management",
      description: "Comprehensive lead capture, scoring, and nurturing with AI intelligence",
      icon: Target,
      benefits: ["Smart lead scoring", "Automated nurturing", "Conversion tracking"]
    },
    {
      title: "Customer Management",
      description: "Complete customer profiles with 360-degree view and interaction history",
      icon: Users,
      benefits: ["Customer profiles", "Interaction history", "Relationship tracking"]
    },
    {
      title: "Pipeline Management",
      description: "Intelligent sales pipeline tracking and optimization",
      icon: BarChart3,
      benefits: ["Pipeline tracking", "Stage optimization", "Forecasting"]
    },
    {
      title: "Communication Hub",
      description: "Centralized communication management across all channels",
      icon: Mail,
      benefits: ["Multi-channel", "Automated workflows", "Response tracking"]
    }
  ];

  const benefits = [
    "Increase sales productivity by 300%",
    "Improve lead conversion by 200%",
    "Reduce manual data entry by 90%",
    "Boost customer retention by 150%",
    "Streamline sales processes",
    "Enhance customer relationships"
  ];

  const crmModules = [
    {
      module: "Contact Management",
      description: "Comprehensive contact and company information management",
      icon: UserCheck
    },
    {
      module: "Lead Management",
      description: "Advanced lead tracking, scoring, and nurturing",
      icon: Target
    },
    {
      module: "Opportunity Management",
      description: "Sales opportunity tracking and pipeline management",
      icon: TrendingUp
    },
    {
      module: "Task Management",
      description: "Automated task creation and follow-up scheduling",
      icon: Calendar
    }
  ];

  return (
    <Layout
      title="AI-powered Sales CRM 2045 - Zion Tech Group"
      description="Revolutionary AI-powered sales CRM platform that provides intelligent customer management, lead scoring, and comprehensive sales pipeline optimization."
      keywords="AI sales CRM, sales CRM, customer relationship management, lead management, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Sales CRM Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-powered
                <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sales CRM
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your customer relationships with our revolutionary AI CRM platform. 
                Intelligent customer management, lead scoring, and comprehensive sales pipeline optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start CRM
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-teal-500/30 text-teal-300 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-300"
                >
                  CRM Demo
                </motion.button>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our sales CRM platform truly revolutionary
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Features Section */}
        <section className="py-20 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful CRM capabilities that transform your customer relationships
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                CRM Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive CRM coverage for every aspect of customer relationship management
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {crmAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Modules Section */}
        <section className="py-20 bg-gradient-to-r from-teal-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                CRM Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive modules for complete customer relationship management
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {crmModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{module.module}</h3>
                  <p className="text-gray-300">{module.description}</p>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                CRM Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible impact of AI-powered sales CRM
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready for Sales CRM?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your customer relationships with AI-powered sales CRM and optimize your sales process.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 text-lg"
                >
                  Start CRM Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSalesCRM;