import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Users
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Custom dashboard creation',
        'Automated reporting',
        'Pattern recognition',
        'Anomaly detection'
      ],
      pricing: 'Starting from $2,500/month',
      link: '/ai-business-intelligence'
    },
    {
      icon: Cpu,
      title: 'Machine Learning Automation',
      description: 'Automate complex processes with intelligent machine learning algorithms',
      features: [
        'Process automation workflows',
        'Intelligent decision making',
        'Continuous learning systems',
        'Performance optimization',
        'Scalable ML infrastructure',
        'Model monitoring & maintenance'
      ],
      pricing: 'Starting from $3,000/month',
      link: '/ml-automation'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Build intelligent conversational AI and text analysis systems',
      features: [
        'Chatbot development',
        'Sentiment analysis',
        'Text classification',
        'Language translation',
        'Document processing',
        'Voice recognition'
      ],
      pricing: 'Starting from $2,000/month',
      link: '/nlp-services'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for business applications',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Video analytics',
        'Quality control automation',
        'Security monitoring',
        'Medical imaging analysis'
      ],
      pricing: 'Starting from $3,500/month',
      link: '/computer-vision'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with AI-driven insights',
      features: [
        'Customer behavior prediction',
        'Market trend analysis',
        'Risk assessment',
        'Demand forecasting',
        'Performance optimization',
        'Strategic planning support'
      ],
      pricing: 'Starting from $2,800/month',
      link: '/predictive-analytics'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Create high-quality content automatically with AI assistance',
      features: [
        'Automated content creation',
        'SEO optimization',
        'Multi-language support',
        'Content personalization',
        'Brand voice consistency',
        'Performance tracking'
      ],
      pricing: 'Starting from $1,500/month',
      link: '/ai-content-generation'
    }
  ];

  const aiCapabilities = [
    {
      icon: Target,
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed specifically for your business needs'
    },
    {
      icon: Users,
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on implementing AI across your organization'
    },
    {
      icon: Zap,
      title: 'AI Integration Services',
      description: 'Seamless integration of AI solutions with existing systems'
    },
    {
      icon: Star,
      title: 'AI Training & Support',
      description: 'Comprehensive training and ongoing support for your team'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Medical diagnosis', 'Patient monitoring', 'Drug discovery', 'Administrative automation']
    },
    {
      industry: 'Finance',
      applications: ['Fraud detection', 'Risk assessment', 'Trading algorithms', 'Customer service']
    },
    {
      industry: 'Manufacturing',
      applications: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Process automation']
    },
    {
      industry: 'Retail',
      applications: ['Customer segmentation', 'Inventory management', 'Price optimization', 'Personalized marketing']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-zion-cyan/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-zion-cyan bg-clip-text text-transparent">
              AI & Machine Learning Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From predictive analytics to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View AI Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-purple-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide end-to-end AI solutions from strategy to implementation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{capability.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              AI solutions that transform businesses across industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business operations and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get AI Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;