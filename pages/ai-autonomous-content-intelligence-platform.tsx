import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  PenTool, 
  TrendingUp, 
  Globe, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAutonomousContentIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Consciousness Integration",
      description: "Advanced AI consciousness that understands context, emotions, and brand voice for human-like content creation"
    },
    {
      icon: PenTool,
      title: "Autonomous Content Creation",
      description: "Fully autonomous content generation across all channels with zero human intervention required"
    },
    {
      icon: TrendingUp,
      title: "Real-time Performance Optimization",
      description: "Continuous learning and optimization based on real-time performance data and audience engagement"
    },
    {
      icon: Globe,
      title: "Multi-channel Distribution",
      description: "Seamless content distribution across social media, websites, email, and emerging platforms"
    },
    {
      icon: Zap,
      title: "Predictive Content Trends",
      description: "AI-powered trend prediction to create content that resonates with your audience before it becomes popular"
    },
    {
      icon: Shield,
      title: "Brand Voice Consistency",
      description: "Maintains consistent brand voice and messaging across all content and channels"
    }
  ];

  const benefits = [
    "Zero human intervention required for content operations",
    "24/7 content generation and distribution",
    "Improved engagement rates through AI optimization",
    "Cost reduction through full automation",
    "Scalable content operations for any business size",
    "Data-driven optimization for better results",
    "Consistent brand messaging across all channels",
    "Faster time to market for content campaigns",
    "Reduced content creation costs by up to 80%",
    "Enhanced audience targeting and personalization"
  ];

  const useCases = [
    "Digital marketing agencies",
    "E-commerce businesses",
    "Content creators and influencers",
    "Social media managers",
    "Brand managers and marketers",
    "Publishers and media companies",
    "Educational institutions",
    "Healthcare organizations",
    "Financial services companies",
    "Government agencies"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 content pieces per month",
        "Basic AI consciousness features",
        "Social media integration",
        "Performance analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 500 content pieces per month",
        "Advanced AI consciousness",
        "Multi-channel distribution",
        "Advanced analytics and reporting",
        "Priority support",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises and organizations",
      features: [
        "Unlimited content generation",
        "Full AI consciousness capabilities",
        "Custom AI training",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom development",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Autonomous Content Intelligence Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI platform that autonomously creates, optimizes, and distributes content across all channels with human-like creativity and strategic thinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of content creation with AI consciousness and autonomous operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Content Strategy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI consciousness can revolutionize your content operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect For Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startups to enterprises, our platform adapts to your needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all"
                >
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed for businesses of all sizes
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border ${
                    index === 1 
                      ? 'border-purple-500/40 shadow-xl shadow-purple-500/20' 
                      : 'border-purple-500/20'
                  } hover:border-purple-500/40 transition-all`}
                >
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                      index === 1
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">$45.8B</div>
                <p className="text-gray-300">Market Size by 2025</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-pink-400 mb-2">80%</div>
                <p className="text-gray-300">Cost Reduction</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <p className="text-gray-300">Autonomous Operation</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Content Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the future of autonomous content creation with AI consciousness
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your content strategy? Contact our team today
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousContentIntelligencePlatform;