import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Shield, Zap, Cloud, Rocket, Target, Users, Award, Globe } from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      category: 'AI Business Intelligence',
      services: [
        {
          title: 'AI Business Intelligence Suite',
          description: 'Comprehensive business intelligence powered by advanced AI algorithms for data-driven decision making.',
          features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          link: '/ai-business-intelligence'
        },
        {
          title: 'AI Business Intelligence Pro',
          description: 'Enterprise-grade AI BI solution with advanced machine learning and predictive analytics.',
          features: ['ML-powered forecasting', 'Advanced segmentation', 'ROI optimization', 'Competitive analysis'],
          icon: Target,
          color: 'from-blue-500 to-cyan-500',
          link: '/ai-business-intelligence-pro'
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      services: [
        {
          title: 'AI Content Generation',
          description: 'Automated content creation using advanced language models for marketing and communication.',
          features: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions'],
          icon: Zap,
          color: 'from-yellow-500 to-orange-500',
          link: '/ai-content-generation'
        },
        {
          title: 'AI Content Marketing Automation',
          description: 'End-to-end content marketing automation with AI-powered personalization and optimization.',
          features: ['Content planning', 'Automated publishing', 'Performance tracking', 'Audience insights'],
          icon: Rocket,
          color: 'from-green-500 to-emerald-500',
          link: '/ai-content-marketing-automation'
        }
      ]
    },
    {
      category: 'AI Development & Code',
      services: [
        {
          title: 'AI Code Generation Enterprise',
          description: 'Enterprise-grade AI code generation for rapid application development and maintenance.',
          features: ['Multi-language support', 'Code review', 'Documentation generation', 'Testing automation'],
          icon: Cpu,
          color: 'from-indigo-500 to-purple-500',
          link: '/ai-code-generation-enterprise'
        },
        {
          title: 'AI Code Review Copilot',
          description: 'AI-powered code review assistant that identifies issues and suggests improvements.',
          features: ['Security scanning', 'Performance optimization', 'Best practices', 'Learning recommendations'],
          icon: Shield,
          color: 'from-red-500 to-pink-500',
          link: '/ai-code-review-copilot'
        }
      ]
    },
    {
      category: 'AI Research & Innovation',
      services: [
        {
          title: 'AI Autonomous Research Assistant',
          description: 'Intelligent research automation for scientific discovery and innovation.',
          features: ['Literature review', 'Data analysis', 'Hypothesis generation', 'Report creation'],
          icon: Brain,
          color: 'from-cyan-500 to-blue-500',
          link: '/ai-autonomous-research-assistant'
        },
        {
          title: 'AI Consciousness Evolution Platform',
          description: 'Cutting-edge research platform for AI consciousness and cognitive development.',
          features: ['Neural architecture', 'Consciousness simulation', 'Ethical frameworks', 'Research collaboration'],
          icon: Globe,
          color: 'from-violet-500 to-purple-500',
          link: '/ai-consciousness-evolution-platform'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations with AI-powered solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Unlock valuable insights from your data with advanced AI analytics and machine learning.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and process optimization.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology and innovation.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Medical diagnosis', 'Drug discovery', 'Patient monitoring', 'Research automation'],
      icon: Shield
    },
    {
      industry: 'Finance',
      applications: ['Risk assessment', 'Fraud detection', 'Trading algorithms', 'Customer service'],
      icon: Target
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation'],
      icon: Cpu
    },
    {
      industry: 'Retail',
      applications: ['Customer personalization', 'Inventory management', 'Demand forecasting', 'Chatbots'],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to autonomous systems, we deliver the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Experience the power of artificial intelligence with our comprehensive suite of services.
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
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your business needs and drive innovation.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                        <p className="text-zion-slate-light mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                          Learn More
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover how AI is transforming industries and creating new opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-zion-slate-light text-sm">
                        • {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Transform your business with our cutting-edge AI services. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;