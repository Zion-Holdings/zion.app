import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Code,
  Database,
  Cloud,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  Eye
} from 'lucide-react';

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const aiServices = [
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your business needs',
      icon: Brain,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing capabilities',
      icon: MessageSquare,
      features: ['Chatbots & Virtual Assistants', 'Text Analysis', 'Language Translation']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automation',
      icon: Eye,
      features: ['Object Detection', 'Facial Recognition', 'Quality Control']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for strategic planning',
      icon: TrendingUp,
      features: ['Trend Forecasting', 'Risk Assessment', 'Performance Optimization']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support',
      benefits: ['Reduced response time', 'Lower operational costs', 'Improved customer satisfaction'],
      icon: Users
    },
    {
      title: 'Predictive Maintenance',
      description: 'Machine learning algorithms that predict equipment failures before they happen',
      benefits: ['Prevent downtime', 'Reduce maintenance costs', 'Extend equipment lifespan'],
      icon: Shield
    },
    {
      title: 'Fraud Detection',
      description: 'Advanced AI systems that identify suspicious activities in real-time',
      benefits: ['Enhanced security', 'Reduced financial losses', 'Compliance adherence'],
      icon: Shield
    },
    {
      title: 'Process Optimization',
      description: 'AI-driven analysis to streamline business operations and workflows',
      benefits: ['Increased efficiency', 'Cost reduction', 'Better resource allocation'],
      icon: TrendingUp
    }
  ];

  const technologies = [
    { name: 'TensorFlow', category: 'Deep Learning', icon: Brain },
    { name: 'PyTorch', category: 'Machine Learning', icon: Code },
    { name: 'Scikit-learn', category: 'ML Algorithms', icon: Database },
    { name: 'OpenAI GPT', category: 'Language Models', icon: MessageSquare },
    { name: 'AWS SageMaker', category: 'Cloud ML', icon: Cloud },
    { name: 'Azure ML', category: 'Enterprise ML', icon: Cloud }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '10x', label: 'Faster Processing', icon: Zap },
    { number: '40%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Availability', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions That
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Transform{' '}
              </span>
              Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and stay ahead of the competition with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive artificial intelligence solutions designed to address your specific business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Real-World Applications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI is transforming industries and solving complex business problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Use Case Navigation */}
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.button
                  key={useCase.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedUseCase(index)}
                  className={`w-full p-6 text-left rounded-lg transition-all duration-200 ${
                    selectedUseCase === index
                      ? 'bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border-cyan-400/50'
                      : 'bg-white/10 hover:bg-white/20 border-white/20'
                  } border`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedUseCase === index
                        ? 'bg-gradient-to-br from-cyan-400 to-purple-600'
                        : 'bg-white/20'
                    }`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{useCase.title}</h3>
                      <p className="text-sm text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Use Case Details */}
            <motion.div
              key={selectedUseCase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{useCases[selectedUseCase].title}</h3>
                <p className="text-gray-300 mb-6">{useCases[selectedUseCase].description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {useCases[selectedUseCase].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Cutting-Edge Technologies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage the latest AI frameworks and tools to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how artificial intelligence can solve your unique challenges and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Talk to Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Delaware, United States</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}