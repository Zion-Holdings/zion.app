import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Users, TrendingUp, Globe, Lock, CheckCircle, Star, Cpu, Database, BarChart3, MessageSquare, Eye, Target, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIServices = () => {
  const services = [
    {
      title: "AI-Powered Analytics",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
      icon: BarChart3,
      features: ["Predictive modeling", "Real-time dashboards", "Custom reporting", "Data visualization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Natural Language Processing",
      description: "Build intelligent chatbots, sentiment analysis, and language understanding systems.",
      icon: MessageSquare,
      features: ["Chatbot development", "Sentiment analysis", "Text classification", "Language translation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Vision",
      description: "Implement image recognition, object detection, and visual AI solutions.",
      icon: Eye,
      features: ["Image classification", "Object detection", "Facial recognition", "Quality control"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business requirements.",
      icon: Target,
      features: ["Custom algorithms", "Model training", "Performance optimization", "Continuous learning"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI Infrastructure",
      description: "Scalable AI infrastructure and deployment solutions.",
      icon: Cpu,
      features: ["Cloud deployment", "Auto-scaling", "Performance monitoring", "Security compliance"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and digital transformation.",
      icon: Users,
      features: ["Strategy planning", "Technology selection", "Implementation roadmap", "Team training"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline operations",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights for strategic business decisions",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through intelligent automation",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge AI technology",
      icon: Rocket,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's AI solutions transformed our customer service operations. Our response time improved by 80%.",
      name: "Sarah Johnson",
      role: "CTO, TechCorp Solutions",
      rating: 5
    },
    {
      content: "The AI-powered analytics platform gave us insights we never had before. Game-changing for our business.",
      name: "Michael Chen",
      role: "Operations Director, InnovateLab",
      rating: 5
    },
    {
      content: "Working with Zion's AI team was incredible. They understood our needs and delivered beyond expectations.",
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="AI & Machine Learning Services | Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems."
        keywords="AI services, machine learning, artificial intelligence, predictive analytics, NLP, computer vision"
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI & Machine Learning
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Leverage cutting-edge artificial intelligence and machine learning to automate processes, 
                gain insights, and create competitive advantages in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From predictive analytics to natural language processing, we offer end-to-end AI solutions 
                that drive real business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Solutions?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing AI in your business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from businesses that have transformed their operations with our AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our AI solutions can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServices;