import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Brain, Zap, Target, Monitor, Volume2, Circle, ArrowRight, CheckCircle, Star, Clock, Users } from 'lucide-react';

const AIServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');

  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'AI & Machine Learning'
  );

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Named Entity Recognition']
    },
    {
      icon: Monitor,
      title: 'Computer Vision',
      description: 'Image and video analysis with object detection and pattern recognition.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and trend prediction.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior Prediction', 'Market Analysis']
    },
    {
      icon: Circle,
      title: 'Automated Decision Making',
      description: 'AI-powered systems for intelligent decision support and automation.',
      features: ['Process Automation', 'Decision Trees', 'Rule-based Systems', 'Intelligent Routing']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient monitoring, and medical research.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, risk assessment, and algorithmic trading.',
      icon: '💳'
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory optimization, and customer insights.',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Adaptive learning, student assessment, and content personalization.',
      icon: '🎓'
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous vehicles, and traffic management.',
      icon: '🚗'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations',
      icon: Zap
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for improved strategic planning',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize processes and reduce operational expenses',
      icon: CheckCircle
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and improved satisfaction',
      icon: Users
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Evaluate current systems and define AI implementation goals',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Data Preparation',
      description: 'Clean, structure, and prepare data for AI model training',
      duration: '2-4 weeks'
    },
    {
      step: 3,
      title: 'Model Development',
      description: 'Build and train AI models using advanced algorithms',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Thorough testing and validation of AI systems',
      duration: '2-3 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Monitoring',
      description: 'Launch AI solutions and continuous performance monitoring',
      duration: '1-2 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-zion-purple-light/20 p-4 rounded-full">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services Showcase
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business. 
            Our cutting-edge AI solutions deliver intelligent automation, predictive insights, 
            and enhanced decision-making capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Explore AI Services
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Capabilities & Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI expertise spans across multiple domains, enabling us to deliver 
              comprehensive solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light mb-4">{capability.description}</p>
                <ul className="text-left space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Portfolio */}
      <div id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Services Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of AI services designed to accelerate 
              your digital transformation journey.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['services', 'industries', 'benefits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      {service.supportLevel === 'premium' && (
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Price:</span>
                        <span className="text-white font-bold">{service.currency}{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Delivery:</span>
                        <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Support:</span>
                        <span className="text-zion-slate-light text-sm capitalize">{service.supportLevel}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-zion-slate-light">{industry.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-zion-purple/20 p-3 rounded-full">
                        <benefit.icon className="w-8 h-8 text-zion-purple" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-zion-slate-light">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Implementation Process */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Implementation Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful AI implementation with 
              clear milestones and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {implementationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-zion-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light text-sm mb-2">{step.description}</p>
                <div className="flex items-center justify-center gap-1 text-zion-cyan text-xs">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation, efficiency, 
            and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Schedule AI Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesShowcase;