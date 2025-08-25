import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Target, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Globe,
  Lock
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const features = [
  {
    title: "Intelligent Decision Making",
    description: "AI-powered decision engine that analyzes market trends, customer behavior, and business metrics to make optimal business decisions.",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Real-time Analytics",
    description: "Continuous monitoring and analysis of business performance with instant insights and actionable recommendations.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Automated Operations",
    description: "Streamline business processes with intelligent automation that adapts to changing business conditions.",
    icon: Zap,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Predictive Insights",
    description: "Forecast market trends, customer needs, and business opportunities with advanced predictive analytics.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  "Increase operational efficiency by up to 60%",
  "Reduce decision-making time by 80%",
  "Improve customer satisfaction scores by 45%",
  "Boost revenue growth through data-driven insights",
  "Minimize operational risks with predictive analytics",
  "Scale operations seamlessly with intelligent automation"
];

const useCases = [
  {
    title: "Enterprise Management",
    description: "Comprehensive business management for large enterprises with multiple departments and complex operations.",
    icon: Users
  },
  {
    title: "Startup Growth",
    description: "Accelerate startup growth with intelligent scaling strategies and market opportunity identification.",
    icon: TrendingUp
  },
  {
    title: "E-commerce Optimization",
    description: "Optimize e-commerce operations with AI-driven inventory management and customer behavior analysis.",
    icon: Target
  },
  {
    title: "Financial Services",
    description: "Enhance financial decision-making with real-time market analysis and risk assessment.",
    icon: BarChart3
  }
];

const testimonials = [
  {
    content: "The AI Autonomous Business Manager transformed our operations completely. We've seen a 40% increase in efficiency and our decision-making process is now lightning-fast.",
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    rating: 5
  },
  {
    content: "Implementing this AI system was the best decision we made. It's like having a brilliant business strategist working 24/7.",
    name: "Michael Rodriguez",
    role: "COO, InnovateCorp",
    rating: 5
  }
];

export default function AIAutonomousBusinessManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      <SEO 
        title="AI Autonomous Business Manager - Zion Tech Group" 
        description="Transform your business operations with our AI-powered autonomous business manager. Intelligent decision-making, real-time analytics, and automated operations."
        keywords="AI business manager, autonomous business, AI decision making, business automation, predictive analytics"
        canonical="https://ziontechgroup.com/ai-services/ai-autonomous-business-manager/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-cyan-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              AI-Powered Business Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Business Manager
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Revolutionize your business operations with intelligent AI that manages, analyzes, and optimizes every aspect of your business automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Intelligent Business Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system provides comprehensive business management capabilities that adapt and learn from your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose AI Autonomous Business Manager?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented business growth and efficiency with our cutting-edge AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Perfect For Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprise corporations, our AI system adapts to your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders have to say about our AI system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our AI Autonomous Business Manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}