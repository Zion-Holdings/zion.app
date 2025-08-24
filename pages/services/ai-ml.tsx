import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Database, Target, Zap, Users, CheckCircle, 
  ArrowRight, ChevronRight, Globe, Shield, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function AIMachineLearningPage() {
  const features = [
    {
      icon: Brain,
      title: "Neural Network Architecture",
      description: "Custom neural network designs optimized for your specific use case",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Machine Learning Models",
      description: "Advanced ML models for prediction, classification, and pattern recognition",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Intelligent data preprocessing and feature engineering",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Real-time AI",
      description: "Low-latency AI systems for real-time decision making",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "AI Consulting",
      description: "Strategic AI implementation and optimization guidance",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Fraud detection, risk assessment, and algorithmic trading",
      icon: Shield,
      examples: ["Credit scoring", "Market prediction", "Compliance automation"]
    },
    {
      title: "Healthcare",
      description: "Medical diagnosis, drug discovery, and patient care optimization",
      icon: Brain,
      examples: ["Disease prediction", "Treatment planning", "Medical imaging"]
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: Cpu,
      examples: ["Equipment monitoring", "Defect detection", "Inventory management"]
    },
    {
      title: "Retail & E-commerce",
      description: "Customer behavior analysis, recommendation systems, and demand forecasting",
      icon: Target,
      examples: ["Personalization", "Price optimization", "Stock management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI & Machine Learning Services — Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI and machine learning solutions. Custom neural networks, predictive analytics, and intelligent automation." />
        <meta property="og:title" content="AI & Machine Learning Services — Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and machine learning solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-ml" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5 mx-auto mb-8 flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions that drive innovation and growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              From custom neural networks to predictive analytics, our AI solutions are designed to solve complex business challenges and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Start Your AI Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI and machine learning services cover every aspect of intelligent automation and data-driven decision making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-purple-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover how our AI solutions are transforming industries and driving innovation across sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-white/70">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/80">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and machine learning solutions can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Contact Our AI Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}