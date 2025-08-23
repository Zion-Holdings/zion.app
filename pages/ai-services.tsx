import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function AIServices() {
  const services = [
    {
      title: "AI-Powered Automation",
      description: "Intelligent process automation using advanced machine learning algorithms",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      features: ["Process optimization", "Workflow automation", "Smart decision making", "Predictive analytics"],
      href: "/ai-automation-services"
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms for business intelligence",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: ["Predictive modeling", "Data analysis", "Pattern recognition", "Real-time learning"],
      href: "/mlops-starter"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis and language understanding systems",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Content generation"],
      href: "/llm-gateway"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and quality control",
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      features: ["Object detection", "Image classification", "Video analytics", "Quality inspection"],
      href: "/computer-vision-solutions"
    },
    {
      title: "AI Ethics & Governance",
      description: "Responsible AI development and compliance frameworks",
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      features: ["Bias detection", "Explainable AI", "Privacy protection", "Compliance monitoring"],
      href: "/ai-ethics-automation"
    },
    {
      title: "AI Infrastructure",
      description: "Scalable AI computing platforms and cloud solutions",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      features: ["GPU clusters", "Distributed computing", "Model serving", "Auto-scaling"],
      href: "/ai-infrastructure"
    }
  ];

  const benefits = [
    "Increased operational efficiency by up to 300%",
    "Reduced manual errors by 95%",
    "Real-time insights and decision making",
    "Scalable solutions that grow with your business",
    "24/7 automated operations",
    "Cost reduction through intelligent optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From automation to predictive analytics, we deliver intelligent solutions that drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent automation and data-driven insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can revolutionize your operations and drive unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </Link>
              <Link href="/pricing" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
