import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Clock,
  Star,
  Award,
  Users,
  Globe,
  Code,
  Settings,
  Lock,
  BarChart3,
  TrendingUp,
  Cpu,
  Brain,
  Atom,
  Shield,
  Zap,
  Target,
  Heart,
  Lightbulb,
  Leaf,
  Infinity,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const GetStartedPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const onboardingSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your needs and explore our solutions',
      duration: '30 minutes',
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Our experts design a customized solution tailored to your business requirements',
      duration: '1-2 weeks',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Professional implementation and deployment of your chosen solution',
      duration: '2-8 weeks',
      icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
      step: 4,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support to ensure success',
      duration: 'Ongoing',
      icon: <Users className="w-8 h-8 text-orange-400" />
    }
  ];

  const serviceCategories = [
    {
      category: 'AI & Machine Learning',
      services: ['AI Consciousness Evolution', 'Quantum AI Cognitive', 'Autonomous AI Research', 'AI Business Intelligence'],
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      category: 'Quantum Computing',
      services: ['Quantum Cloud Infrastructure', 'Quantum Cybersecurity', 'Quantum Neural Networks', 'Quantum Data Centers'],
      icon: <Atom className="w-6 h-6 text-blue-400" />
    },
    {
      category: 'Space Technology',
      services: ['Space Resource Intelligence', 'Space Computing Platform', 'Extraterrestrial AI', 'Space Data Analytics'],
      icon: <Rocket className="w-6 h-6 text-pink-400" />
    },
    {
      category: 'Cybersecurity',
      services: ['Zero Trust Architecture', 'Quantum Security', 'Autonomous SOC', 'Compliance Automation'],
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const benefits = [
    {
      benefit: 'Expert Guidance',
      description: 'Work with industry experts who understand your business challenges',
      icon: <Star className="w-6 h-6 text-yellow-400" />
    },
    {
      benefit: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your unique requirements',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      benefit: 'Proven Results',
      description: 'Track record of successful implementations and measurable ROI',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />
    },
    {
      benefit: 'Ongoing Support',
      description: 'Continuous support and optimization to ensure long-term success',
      icon: <Heart className="w-6 h-6 text-red-400" />
    }
  ];

  const contactMethods = [
    {
      method: 'Phone Consultation',
      details: '+1 302 464 0950',
      description: 'Speak directly with our experts',
      icon: <Phone className="w-6 h-6 text-blue-400" />
    },
    {
      method: 'Email Inquiry',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      icon: <Mail className="w-6 h-6 text-green-400" />
    },
    {
      method: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant answers to your questions',
      icon: <MessageCircle className="w-6 h-6 text-purple-400" />
    },
    {
      method: 'Schedule Meeting',
      details: 'Book a consultation',
      description: 'Reserve a time that works for you',
      icon: <Calendar className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <Layout 
      title="Get Started - Zion Tech Group"
      description="Start your journey with Zion Tech Group. Learn about our onboarding process, explore solutions, and connect with our experts to transform your business."
      keywords="get started, onboarding, consultation, AI services, quantum computing, space technology, cybersecurity, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Get Started
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Ready to transform your business with revolutionary technology? Let's start your journey with Zion Tech Group and unlock unprecedented opportunities for growth and innovation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/demo" 
                  className="px-8 py-4 border border-emerald-500/40 text-emerald-300 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Request Demo
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple Onboarding Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've streamlined our onboarding process to get you up and running quickly with minimal disruption to your business.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{step.icon}</div>
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <div className="flex items-center justify-center text-emerald-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary technologies that can transform your business operations and drive innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{category.category}</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're your partner in innovation and transformation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {benefit.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{benefit.benefit}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to start your transformation? Choose the method that works best for you.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{method.method}</h3>
                  <p className="text-emerald-400 font-semibold mb-2">{method.details}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the technology revolution and unlock unprecedented opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  Start Your Journey Today
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-emerald-500/40 text-emerald-300 rounded-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStartedPage;