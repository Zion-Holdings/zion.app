import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Brain, Zap, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Award, TrendingUp,
  MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIPoweredNLP: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Language Understanding',
      description: 'Advanced natural language comprehension and interpretation'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Continuous learning and adaptation to language patterns'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Instant language processing and response generation'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy Protection',
      description: 'Secure language processing with data privacy safeguards'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Availability',
      description: 'Continuous language processing and support availability'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-language Support',
      description: 'Comprehensive support for multiple languages and dialects'
    }
  ];

  const nlpCapabilities = [
    {
      area: 'Text Analysis',
      capabilities: ['Sentiment analysis', 'Entity recognition', 'Topic modeling', 'Language detection'],
      improvement: '99% accuracy',
      speed: 'Real-time'
    },
    {
      area: 'Language Generation',
      capabilities: ['Text generation', 'Summarization', 'Translation', 'Content creation'],
      improvement: 'Human-like quality',
      creativity: 'High'
    },
    {
      area: 'Conversation AI',
      capabilities: ['Chatbots', 'Virtual assistants', 'Customer service', 'Interactive systems'],
      improvement: 'Natural conversations',
      context: 'Full understanding'
    },
    {
      area: 'Document Processing',
      capabilities: ['Document analysis', 'Information extraction', 'Classification', 'Search optimization'],
      improvement: '100x faster',
      accuracy: '99.9%'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'AI-powered chatbots and virtual assistants for enhanced customer support',
      benefits: ['24/7 availability', 'Instant responses', 'Multilingual support', 'Cost reduction']
    },
    {
      title: 'Content Creation',
      description: 'Automated content generation and optimization for marketing and communication',
      benefits: ['Faster content creation', 'SEO optimization', 'Multilingual content', 'Consistent quality']
    },
    {
      title: 'Data Analysis',
      description: 'Text mining and analysis for business intelligence and insights',
      benefits: ['Customer insights', 'Market trends', 'Competitive analysis', 'Risk assessment']
    },
    {
      title: 'Healthcare',
      description: 'Medical text analysis and patient communication automation',
      benefits: ['Medical record analysis', 'Patient communication', 'Clinical decision support', 'Research insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'NLP Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for small businesses starting with NLP',
      features: [
        'Up to 10,000 requests/month',
        'Basic language processing',
        'Standard API access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'NLP Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced NLP needs',
      features: [
        'Up to 100,000 requests/month',
        'Advanced language processing',
        'Custom model training',
        'Priority support',
        'Advanced analytics',
        'Full API access',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'NLP Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex NLP requirements',
      features: [
        'Unlimited requests',
        'Custom NLP development',
        'Dedicated infrastructure',
        'Dedicated support team',
        'Advanced analytics',
        'Full API integration',
        'Custom compliance frameworks'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The AI-Powered NLP platform has revolutionized our customer service. Our chatbots now handle 80% of customer inquiries automatically.",
      author: "Lisa Chen",
      position: "Customer Experience Director",
      company: "Global Retail Corp"
    },
    {
      quote: "Our content creation process is now 10x faster with AI-powered NLP. The quality and consistency are remarkable.",
      author: "David Rodriguez",
      position: "Marketing Director",
      company: "Innovation Marketing Inc"
    },
    {
      quote: "The NLP platform has transformed our medical text analysis. We're extracting insights that were previously impossible.",
      author: "Dr. Sarah Williams",
      position: "Research Director",
      company: "Advanced Medical Research"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                AI-Powered Natural Language Processing
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Natural Language Processing
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of language understanding with AI-powered NLP. Achieve unprecedented 
                comprehension, generation, and interaction capabilities across all language applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Processing
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered NLP Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary AI technology designed specifically for advanced language understanding and processing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NLP Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NLP Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive natural language processing across all language types and applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nlpCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {capability.area}
                    </h3>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{capability.improvement}</div>
                      <div className="text-gray-400 text-sm">Performance Gain</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-medium mb-2">Key Capabilities:</h4>
                    <ul className="space-y-1">
                      {capability.capabilities.map((cap, capIndex) => (
                        <li key={capIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {capability.area === 'Text Analysis' ? 'Speed:' : 
                       capability.area === 'Language Generation' ? 'Creativity:' :
                       capability.area === 'Conversation AI' ? 'Context:' : 'Accuracy:'}
                    </span>
                    <span className="text-white font-medium">{capability.speed || capability.creativity || capability.context || capability.accuracy}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how AI-powered NLP can transform operations across various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NLP Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge AI-powered NLP technology for comprehensive language processing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-cyan-400/40 bg-cyan-400/5' 
                      : 'border-cyan-400/20'
                  } hover:border-cyan-400/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10'
                  }`}>
                    {plan.name === 'NLP Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What NLP Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from professionals using our AI-powered NLP platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Process with AI-Powered NLP?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI-powered NLP for unprecedented language understanding
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Processing
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact NLP Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredNLP;