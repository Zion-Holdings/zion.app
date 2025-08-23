import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Target, Atom, 
  CheckCircle, ArrowRight, Cpu, Eye, MessageCircle,
  BarChart3, Database, Cloud, Lock, Users, Globe
} from 'lucide-react';

export default function AIServices() {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your business needs',
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Learning'],
      applications: ['Financial Forecasting', 'Customer Behavior Analysis', 'Risk Assessment', 'Process Optimization']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and language understanding capabilities',
      icon: <MessageCircle className="w-12 h-12 text-purple-400" />,
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Chatbot Development'],
      applications: ['Customer Support', 'Content Moderation', 'Document Processing', 'Market Research']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automated visual tasks',
      icon: <Eye className="w-12 h-12 text-green-400" />,
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
      applications: ['Quality Control', 'Security Systems', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for future planning and optimization',
      icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
      features: ['Trend Analysis', 'Risk Prediction', 'Demand Forecasting', 'Performance Optimization'],
      applications: ['Supply Chain Management', 'Financial Planning', 'Marketing Campaigns', 'Resource Allocation']
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation and workflow optimization',
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Decision Automation'],
      applications: ['Customer Service', 'Data Entry', 'Quality Assurance', 'Compliance Monitoring']
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic guidance for AI implementation and digital transformation',
      icon: <Target className="w-12 h-12 text-pink-400" />,
      features: ['AI Roadmap Development', 'Technology Assessment', 'Implementation Planning', 'Change Management'],
      applications: ['Digital Transformation', 'Competitive Analysis', 'Innovation Strategy', 'Talent Development']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, drug discovery, and patient care optimization',
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      name: 'Finance',
      description: 'Risk assessment, fraud detection, and algorithmic trading solutions',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    },
    {
      name: 'Retail',
      description: 'Customer behavior analysis, inventory management, and personalized marketing',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous systems, and predictive maintenance',
      icon: <Globe className="w-8 h-8 text-yellow-400" />
    },
    {
      name: 'Education',
      description: 'Personalized learning, content generation, and student performance analysis',
      icon: <Brain className="w-8 h-8 text-pink-400" />
    }
  ];

  const benefits = [
    'Increased operational efficiency and productivity',
    'Enhanced decision-making with data-driven insights',
    'Improved customer experience and satisfaction',
    'Reduced operational costs and resource waste',
    'Competitive advantage through innovation',
    'Scalable solutions that grow with your business'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            AI & Machine Learning Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your business with cutting-edge artificial intelligence solutions that drive innovation, efficiency, and competitive advantage.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/services" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View All Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From machine learning algorithms to intelligent automation, we provide end-to-end AI solutions that transform your business operations.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to address the unique challenges and opportunities across diverse industry sectors.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI with our proven expertise and innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to successfully implementing AI solutions in your organization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Understanding your business needs and AI readiness',
                icon: <Target className="w-8 h-8 text-cyan-400" />
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Developing a comprehensive AI roadmap and implementation plan',
                icon: <Brain className="w-8 h-8 text-purple-400" />
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building and validating AI models and solutions',
                icon: <Cpu className="w-8 h-8 text-green-400" />
              },
              {
                step: '04',
                title: 'Deployment & Optimization',
                description: 'Launching solutions and continuous improvement',
                icon: <Rocket className="w-8 h-8 text-yellow-400" />
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <div className="flex justify-center mb-3">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI frameworks, tools, and platforms to deliver state-of-the-art solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'TensorFlow & PyTorch',
              'OpenAI GPT & Claude',
              'Computer Vision APIs',
              'Natural Language Processing',
              'Cloud AI Services',
              'Edge AI Computing',
              'AutoML Platforms',
              'MLOps & DevOps'
            ].map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how artificial intelligence can transform your business and drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                <span>Start Your AI Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/quantum-services" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore Quantum AI
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
