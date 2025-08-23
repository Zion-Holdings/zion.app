import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { MessageCircle, Brain, Target, Users, BarChart3, CheckCircle, ArrowRight, Star, Globe, Cpu, Shield, Rocket, Clock, TrendingUp, Video, Headphones, Award, Lightbulb, Zap } from 'lucide-react';

const AIPoweredSalesCoaching: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Coaching",
      description: "Intelligent sales conversation coaching",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Smart Analysis",
      description: "AI-powered performance analysis",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Personalized goal tracking",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "24/7 AI sales mentorship",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const coachingFeatures = [
    "Real-time conversation analysis and feedback",
    "Personalized coaching recommendations",
    "Performance tracking and improvement suggestions",
    "AI-powered role-playing scenarios",
    "Sales technique optimization",
    "Continuous learning and adaptation"
  ];

  const coachingAreas = [
    {
      title: "Conversation Coaching",
      description: "AI-powered analysis of sales conversations with real-time feedback",
      icon: MessageCircle,
      benefits: ["Real-time feedback", "Tone analysis", "Objection handling"]
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive performance tracking with actionable insights",
      icon: BarChart3,
      benefits: ["Progress tracking", "Goal setting", "Performance metrics"]
    },
    {
      title: "Skill Development",
      description: "Targeted skill improvement through AI coaching",
      icon: Target,
      benefits: ["Personalized training", "Skill assessment", "Improvement plans"]
    },
    {
      title: "Mentorship",
      description: "24/7 AI mentorship and guidance",
      icon: Users,
      benefits: ["Always available", "Expert advice", "Continuous support"]
    }
  ];

  const benefits = [
    "Improve sales performance by 250%",
    "Master objection handling techniques",
    "Enhance communication skills",
    "Build confidence in sales interactions",
    "Achieve sales goals faster",
    "Continuous improvement and growth"
  ];

  const coachingMethods = [
    {
      method: "Real-time Feedback",
      description: "Instant coaching during live sales conversations",
      icon: Zap
    },
    {
      method: "Role-playing",
      description: "AI-powered practice scenarios for skill development",
      icon: Users
    },
    {
      method: "Performance Review",
      description: "Detailed analysis of sales performance and areas for improvement",
      icon: BarChart3
    },
    {
      method: "Goal Tracking",
      description: "Personalized goal setting and progress monitoring",
      icon: Target
    }
  ];

  return (
    <Layout
      title="AI-powered Sales Coaching 2045 - Zion Tech Group"
      description="Revolutionary AI-powered sales coaching platform that provides real-time feedback, personalized guidance, and continuous mentorship for sales excellence."
      keywords="AI sales coaching, sales coaching, sales mentorship, sales training, Zion Tech Group"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Sales Coaching Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-powered
                <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Sales Coaching
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your sales skills with revolutionary AI coaching. 
                Real-time feedback, personalized guidance, and continuous mentorship for sales excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Coaching
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
                >
                  Coaching Demo
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
                Discover the cutting-edge capabilities that make our sales coaching platform truly revolutionary
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

        {/* Coaching Features Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Coaching Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful coaching capabilities that transform your sales performance
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coachingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Coaching Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coaching coverage for every aspect of sales excellence
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coachingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Methods Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Coaching Methods
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple coaching approaches to maximize your learning and growth
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coachingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.method}</h3>
                  <p className="text-gray-300">{method.description}</p>
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
                Coaching Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible impact of AI-powered sales coaching
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready for Sales Coaching?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start your AI-powered sales coaching journey and achieve sales excellence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-lg"
                >
                  Start Coaching Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSalesCoaching;