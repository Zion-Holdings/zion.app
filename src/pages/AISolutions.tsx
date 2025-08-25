<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  Lock,
  Sparkles,
  Rocket,
  Eye,
  Code,
  Bot,
  Workflow,
  GanttChart,
  Milestone,
  Activity,
  FileText,
  GitBranch,
  Calendar,
  Clock,
  DollarSign
} from 'lucide-react';

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedService, setSelectedService] = useState(0);

  const aiServices = [
    {
      id: 1,
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automated insights",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Predictive customer behavior analysis",
        "Automated lead scoring and prioritization",
        "Intelligent email marketing campaigns",
        "Real-time sentiment analysis",
        "Automated follow-up scheduling"
      ],
      pricing: "From $299/month",
      category: "Business Intelligence"
    },
    {
      id: 2,
      title: "AI Code Generator",
      description: "Advanced code generation with context-aware suggestions and automated testing",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Multi-language code generation",
        "Context-aware suggestions",
        "Automated unit testing",
        "Code review assistance",
        "Performance optimization tips"
      ],
      pricing: "From $199/month",
      category: "Development"
    },
    {
      id: 3,
      title: "AI Supply Chain",
      description: "Intelligent supply chain optimization with demand forecasting and risk management",
      icon: <Workflow className="w-8 h-8" />,
      features: [
        "Demand forecasting algorithms",
        "Inventory optimization",
        "Risk assessment and mitigation",
        "Supplier performance analytics",
        "Real-time tracking and alerts"
      ],
      pricing: "From $499/month",
      category: "Operations"
    },
    {
      id: 4,
      title: "AI Project Management",
      description: "Smart project management with automated task allocation and progress tracking",
      icon: <GanttChart className="w-8 h-8" />,
      features: [
        "Intelligent task allocation",
        "Progress prediction and alerts",
        "Resource optimization",
        "Risk assessment",
        "Automated reporting"
      ],
      pricing: "From $399/month",
      category: "Management"
    },
    {
      id: 5,
      title: "AI Security & Compliance",
      description: "Advanced security monitoring with threat detection and compliance automation",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Compliance monitoring",
        "Automated incident response",
        "Security audit automation"
      ],
      pricing: "From $599/month",
      category: "Security"
    },
    {
      id: 6,
      title: "AI Data Analytics",
      description: "Comprehensive data analytics with machine learning insights and visualization",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Predictive analytics",
        "Natural language queries",
        "Automated insights generation",
        "Real-time dashboards",
        "Custom ML model training"
      ],
      pricing: "From $349/month",
      category: "Analytics"
    }
  ];

  const categories = ['all', 'Business Intelligence', 'Development', 'Operations', 'Management', 'Security', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "AI-powered automation that works 24/7, processing data in milliseconds"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Learning",
      description: "Machine learning algorithms that continuously improve and adapt to your business"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with AI-powered threat detection and prevention"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Next-Generation AI Solutions
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
              <br />
              <span className="text-white">That Transform Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence with our cutting-edge solutions designed to automate, 
              optimize, and revolutionize your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center gap-2"
              >
                Explore AI Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                AI Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-gray-700 group-hover:to-gray-600 transition-all duration-300">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-cyan-400">AI Solutions</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable business impact with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address every aspect of modern business challenges.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium">{service.pricing}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 text-sm font-medium"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI solutions can revolutionize your operations and drive unprecedented growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center gap-2 mx-auto"
            >
              <Brain className="w-5 h-5" />
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Globe, Users, Award, ArrowRight } from 'lucide-react';

export default function AISolutions() {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI solutions for your business. From machine learning to natural language processing, Zion Tech Group offers comprehensive AI services." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, NLP, computer vision, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver the future of technology.
            </p>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Brain className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-zion-slate-light mb-4">
                  Custom ML models for predictive analytics, recommendation systems, and data insights.
                </p>
                <Link to="/services/ml" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Zap className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-zion-slate-light mb-4">
                  Advanced NLP solutions for chatbots, sentiment analysis, and text processing.
                </p>
                <Link to="/services/nlp" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Globe className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-zion-slate-light mb-4">
                  Image recognition, object detection, and visual AI for various industries.
                </p>
                <Link to="/services/computer-vision" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Shield className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Security</h3>
                <p className="text-zion-slate-light mb-4">
                  Intelligent threat detection and cybersecurity powered by artificial intelligence.
                </p>
                <Link to="/services/ai-security" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">AI Consulting</h3>
                <p className="text-zion-slate-light mb-4">
                  Strategic guidance for AI implementation and digital transformation.
                </p>
                <Link to="/services/ai-consulting" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <Award className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom AI Development</h3>
                <p className="text-zion-slate-light mb-4">
                  Tailored AI solutions designed specifically for your business needs.
                </p>
                <Link to="/services/custom-ai" className="text-zion-cyan hover:text-zion-cyan-light flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Healthcare',
                'Finance',
                'Retail',
                'Manufacturing',
                'Education',
                'Transportation',
                'Energy',
                'Entertainment'
              ].map((industry) => (
                <div key={industry} className="bg-zion-blue-light/10 rounded-lg p-4 text-center border border-zion-purple/20 hover:border-zion-cyan/40 transition-colors">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Let our AI experts help you transform your business with cutting-edge artificial intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get AI Quote
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Talk to Experts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
  );
}