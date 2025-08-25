import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Target,
  Rocket
} from 'lucide-react';

const AIServices = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and automated decision-making systems.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Processing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for chatbots, sentiment analysis, and automated text processing.",
      features: ["Chatbot Development", "Sentiment Analysis", "Text Classification", "Language Translation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, object detection, and visual insights.",
      features: ["Object Detection", "Image Classification", "Quality Control", "Video Analytics"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting solutions to optimize business operations and strategy.",
      features: ["Business Forecasting", "Risk Assessment", "Performance Optimization", "Trend Analysis"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks.",
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Smart Notifications"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Advanced security solutions using AI for threat detection and regulatory compliance.",
      features: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Risk Assessment"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes to save time and resources."
    },
    {
      icon: Target,
      title: "Better Decision Making",
      description: "Data-driven insights help you make informed decisions with confidence."
    },
    {
      icon: Globe,
      title: "24/7 Availability",
      description: "AI systems work around the clock, providing continuous service and monitoring."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "AI solutions grow with your business, handling increased workloads efficiently."
    }
  ];

  const testimonials = [
    {
      content: "Zion's AI solutions transformed our customer service operations. Our response time improved by 80% and customer satisfaction increased significantly.",
      name: "Jennifer Martinez",
      role: "VP of Operations, CustomerFirst Inc.",
      rating: 5
    },
    {
      content: "The predictive analytics platform they built for us has revolutionized our inventory management. We've reduced waste by 30% and improved efficiency.",
      name: "David Kim",
      role: "Supply Chain Director, RetailTech Solutions",
      rating: 5
    },
    {
      content: "Working with Zion on our AI implementation was seamless. Their expertise and support throughout the process exceeded our expectations.",
      name: "Sarah Thompson",
      role: "CTO, Innovation Labs",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems."
        keywords="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-cyan opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions that drive innovation, 
              efficiency, and competitive advantage in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From machine learning to natural language processing, we offer a complete suite 
            of AI services designed to meet your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose AI Solutions?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover the transformative benefits that AI can bring to your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Success Stories
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your AI Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AIServices;