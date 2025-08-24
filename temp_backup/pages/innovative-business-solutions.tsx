import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, 
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,
  Wifi, Building, Cpu as CpuIcon, TrendingUp as ChartIcon, Megaphone, HeadphonesIcon, Users as TeamIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Business Solutions', value: '100+', icon: <Target className="w-5 h-5" /> },
  { label: 'Happy Businesses', value: '250+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.5%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '400%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'Business Intelligence & Analytics',
    description: 'AI-powered business intelligence and data analytics solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Business Intelligence & Analytics'),
    icon: ChartIcon,
    color: 'from-blue-500 to-cyan-600',
    features: ['Data Analysis', 'Predictive Analytics', 'Real-time Insights']
  },
  {
    title: 'Marketing Automation',
    description: 'Intelligent marketing automation with AI-driven optimization',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Marketing Automation'),
    icon: Megaphone,
    color: 'from-purple-500 to-pink-600',
    features: ['Campaign Optimization', 'Content Personalization', 'ROI Tracking']
  },
  {
    title: 'Sales Intelligence',
    description: 'AI-powered sales automation and intelligence solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Sales Intelligence'),
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization']
  },
  {
    title: 'Customer Service',
    description: 'Intelligent customer service with AI automation',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Customer Service'),
    icon: HeadphonesIcon,
    color: 'from-orange-500 to-red-600',
    features: ['AI Chatbots', 'Ticket Automation', 'Sentiment Analysis']
  },
  {
    title: 'HR Management',
    description: 'AI-powered HR automation and management solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'HR Management'),
    icon: TeamIcon,
    color: 'from-teal-500 to-cyan-600',
    features: ['Recruitment Automation', 'Performance Analytics', 'Employee Engagement']
  }
];

const heroFeatures = [
  {
    title: 'AI-Powered Intelligence',
    description: 'Advanced AI algorithms that provide intelligent insights and automation for business operations.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Automated Workflows',
    description: 'Intelligent automation that reduces manual tasks and improves operational efficiency.',
    icon: Settings,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Real-time Analytics',
    description: 'Live data insights and analytics that enable data-driven decision making.',
    icon: BarChart3,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: 'Predictive Capabilities',
    description: 'AI-powered predictions that help businesses anticipate trends and optimize performance.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  }
];

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'CEO, GrowthTech Solutions',
    company: 'GrowthTech Solutions',
    content: 'Zion Tech Group\'s business intelligence platform has transformed our decision-making process. We now have real-time insights that have increased our revenue by 300%.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, DigitalFlow Agency',
    company: 'DigitalFlow Agency',
    content: 'The AI marketing automation platform has revolutionized our campaigns. We\'ve seen conversion rates increase by 150% while reducing costs by 40%.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'David Chen',
    role: 'Sales Manager, TechSales Pro',
    company: 'TechSales Pro',
    content: 'Their sales intelligence platform has increased our sales productivity by 200%. The AI-powered lead scoring and forecasting are game-changers.',
    rating: 5,
    avatar: '👨‍💻'
  }
];

export default function InnovativeBusinessSolutions() {
  return (
    <Layout>
      <Head>
        <title>Innovative Business Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered business solutions including business intelligence, marketing automation, sales intelligence, customer service, and HR management. Transform your business operations with intelligent automation." />
        <meta name="keywords" content="business solutions, AI automation, business intelligence, marketing automation, sales intelligence, customer service, HR management" />
        <meta property="og:title" content="Innovative Business Solutions - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered business solutions including business intelligence, marketing automation, sales intelligence, customer service, and HR management." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-business-solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-business-solutions" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-green-900/20 to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Innovative Business Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business operations with AI-powered intelligence, automation, and analytics that drive growth and efficiency
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-teal-500/30"
                >
                  {stat.icon}
                  <span className="text-teal-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Business Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our business solutions combine cutting-edge AI technology with proven business processes to deliver unprecedented results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Business Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business solutions covering every aspect of modern business operations
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{service.icon}</span>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={service.link}
                              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
                            >
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            <Link
                              href={`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their operations with our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-teal-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/20 via-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations with our innovative AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {contactInfo.address}</p>
              <p className="text-gray-300">🌐 {contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}