import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Code, Shield, Users, TrendingUp, 
  CheckCircle, ArrowRight, Star, Clock, Target,
  Cpu, Rocket, Globe, BarChart3, Settings
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceHighlights = [
  {
    title: 'AI Code Generation',
    description: 'Generate production-ready code across multiple languages with AI intelligence',
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Multi-language support', 'Security scanning', 'Performance optimization', 'Team collaboration']
  },
  {
    title: 'DevOps Automation',
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    features: ['CI/CD optimization', 'Self-healing infrastructure', 'Cost optimization', 'Multi-cloud support']
  },
  {
    title: 'Customer Support AI',
    description: 'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    features: ['Intelligent chatbots', 'Multi-language support', 'Predictive resolution', '24/7 availability']
  },
  {
    title: 'Marketing Automation',
    description: 'AI-powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-600',
    features: ['Campaign optimization', 'Customer personalization', 'ROI tracking', 'Multi-channel automation']
  },
  {
    title: 'Sales Intelligence',
    description: 'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Performance optimization']
  }
];

const benefits = [
  {
    title: '80% Reduction in Manual Work',
    description: 'Automate repetitive tasks and focus on high-value activities',
    icon: Zap,
    color: 'text-emerald-400'
  },
  {
    title: '300% ROI Improvement',
    description: 'Significant returns through increased efficiency and productivity',
    icon: TrendingUp,
    color: 'text-blue-400'
  },
  {
    title: '24/7 Operation',
    description: 'Round-the-clock automation without human intervention',
    icon: Clock,
    color: 'text-purple-400'
  },
  {
    title: 'Real-time Insights',
    description: 'Instant analytics and decision-making support',
    icon: BarChart3,
    color: 'text-pink-400'
  }
];

export default function AIAutomationServices() {
  const services = [
    {
      title: 'Intelligent Process Automation',
      description: 'Transform manual workflows into intelligent, self-optimizing processes that learn and improve over time.',
      features: [
        'Workflow automation with AI decision-making',
        'Process optimization and continuous improvement',
        'Integration with existing enterprise systems',
        'Real-time monitoring and analytics'
      ],
      icon: '🤖',
      category: 'Core Services'
    },
    {
      title: 'AI-Powered Content Generation',
      description: 'Create high-quality, engaging content at scale using advanced natural language processing and generation.',
      features: [
        'Automated content creation and curation',
        'Multi-language content generation',
        'SEO-optimized content strategies',
        'Content performance analytics'
      ],
      icon: '✍️',
      category: 'Content Services'
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to predict trends, identify opportunities, and make data-driven decisions.',
      features: [
        'Advanced predictive modeling',
        'Real-time data analysis',
        'Custom forecasting algorithms',
        'Actionable insights and recommendations'
      ],
      icon: '📊',
      category: 'Analytics Services'
    },
    {
      title: 'Autonomous Customer Service',
      description: 'Provide 24/7 customer support with intelligent chatbots and automated response systems.',
      features: [
        'Natural language understanding',
        'Multi-channel support integration',
        'Escalation to human agents',
        'Continuous learning and improvement'
      ],
      icon: '💬',
      category: 'Customer Experience'
    },
    {
      title: 'Smart Supply Chain Management',
      description: 'Optimize supply chain operations with AI-driven demand forecasting and inventory management.',
      features: [
        'Demand prediction and planning',
        'Inventory optimization',
        'Supplier performance monitoring',
        'Risk assessment and mitigation'
      ],
      icon: '🚚',
      category: 'Operations'
    },
    {
      title: 'Cybersecurity Automation',
      description: 'Protect your systems with intelligent threat detection and automated response capabilities.',
      features: [
        'Real-time threat monitoring',
        'Automated incident response',
        'Behavioral analysis',
        'Compliance monitoring and reporting'
      ],
      icon: '🔒',
      category: 'Security'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI automation for patient care, diagnosis, and administrative processes.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Automated trading, risk assessment, and fraud detection systems.',
      icon: '💳'
    },
    {
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control.',
      icon: '🏭'
    },
    {
      name: 'Retail',
      description: 'Personalized shopping experiences and inventory optimization.',
      icon: '🛍️'
    },
    {
      name: 'Transportation',
      description: 'Route optimization and autonomous vehicle systems.',
      icon: '🚗'
    },
    {
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization.',
      icon: '⚡'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual tasks by up to 80% while improving accuracy and consistency.',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation and optimization of resource allocation.',
      icon: '💰'
    },
    {
      title: '24/7 Operation',
      description: 'Enable continuous operation without human intervention or downtime.',
      icon: '🌙'
    },
    {
      title: 'Scalability',
      description: 'Easily scale operations up or down based on demand and business needs.',
      icon: '📈'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights from automated data analysis and pattern recognition.',
      icon: '🔍'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI automation capabilities.',
      icon: '🏆'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI Automation Services - Zion Tech Group | Advanced AI-Powered Automation Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence." />
        <meta name="keywords" content="AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-automation-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services - Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">AI Automation Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. From code generation to customer support, 
              automate everything with intelligent AI that learns and adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/contact" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </section>

      {/* Service Highlights */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions that transform every aspect of your business operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span> Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI automation services designed for modern enterprises
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedAIAutomationServices2025.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="animated-border"
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-emerald-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.customers}+</div>
                      <div className="text-gray-400 text-sm">Customers</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.trialDays}</div>
                      <div className="text-gray-400 text-sm">Trial Days</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link href={service.link} className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation that delivers measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already transforming their operations with AI automation. 
              Get started today and see the difference intelligent automation can make.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">350%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}