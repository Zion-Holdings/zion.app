import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Brain, Zap, TrendingUp, Target, Users, Clock, Shield, Star, ArrowRight } from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'AI & Machine Learning'
  );

  const aiCapabilities = [
    {
      icon: "🤖",
      title: "Natural Language Processing",
      description: "Advanced text analysis, sentiment detection, and language understanding",
      examples: ["Chatbots", "Content Analysis", "Translation Services"]
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Image and video analysis, object detection, and pattern recognition",
      examples: ["Quality Control", "Security Systems", "Medical Imaging"]
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend prediction using ML models",
      examples: ["Sales Forecasting", "Risk Assessment", "Demand Planning"]
    },
    {
      icon: "🔄",
      title: "Process Automation",
      description: "Intelligent automation of repetitive tasks and workflows",
      examples: ["Document Processing", "Customer Service", "Data Entry"]
    }
  ];

  const aiIndustries = [
    {
      name: "Healthcare",
      description: "Medical diagnosis, drug discovery, patient care optimization",
      icon: "🏥",
      benefits: ["Improved accuracy", "Faster diagnosis", "Cost reduction"]
    },
    {
      name: "Finance",
      description: "Fraud detection, risk assessment, algorithmic trading",
      icon: "💳",
      benefits: ["Enhanced security", "Better risk management", "Increased efficiency"]
    },
    {
      name: "Manufacturing",
      description: "Quality control, predictive maintenance, supply chain optimization",
      icon: "🏭",
      benefits: ["Reduced defects", "Lower costs", "Improved productivity"]
    },
    {
      name: "Retail",
      description: "Customer behavior analysis, inventory optimization, personalized marketing",
      icon: "🛍️",
      benefits: ["Better customer experience", "Increased sales", "Efficient operations"]
    }
  ];

  const aiTechnologies = [
    {
      name: "Machine Learning",
      description: "Supervised, unsupervised, and reinforcement learning algorithms",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"]
    },
    {
      name: "Deep Learning",
      description: "Neural networks for complex pattern recognition",
      tools: ["TensorFlow", "PyTorch", "Keras", "Caffe"]
    },
    {
      name: "Natural Language Processing",
      description: "Text and language understanding capabilities",
      tools: ["OpenAI GPT", "BERT", "SpaCy", "NLTK"]
    },
    {
      name: "Computer Vision",
      description: "Image and video processing and analysis",
      tools: ["OpenCV", "TensorFlow", "PyTorch", "MediaPipe"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl font-bold mb-6">AI & Machine Learning Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions designed for real-world applications
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <span>{aiServices.length} AI Services Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>State-of-the-Art Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Capabilities</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI services cover the full spectrum of machine learning and artificial intelligence applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-zion-blue mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-2 text-sm text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured AI Services */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Featured AI Services</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our most popular and innovative AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <span className="text-xs font-medium text-zion-slate bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                          {service.subcategory}
                        </span>
                      </div>
                    </div>
                    {service.featured && (
                      <span className="text-xs font-medium text-zion-purple bg-zion-purple/10 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zion-blue mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zion-slate mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-green" />
                      Key Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                      <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Industries */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Across Industries</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI solutions are transforming businesses across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiIndustries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zion-blue mb-2">{industry.name}</h3>
                    <p className="text-zion-slate-light text-sm mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-slate">
                          <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Technologies */}
      <div className="py-16 bg-zion-slate/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Technologies & Tools</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver robust AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-slate/10">
                <h3 className="text-xl font-bold text-zion-blue mb-3">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Implementation Process */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Implementation Process</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful AI project delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "Understand requirements, define objectives, and plan the AI solution",
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Data Preparation",
                  description: "Collect, clean, and prepare data for AI model training",
                  icon: "📊"
                },
                {
                  step: "03",
                  title: "Model Development",
                  description: "Build, train, and validate AI models using best practices",
                  icon: "🤖"
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "Deploy the solution and provide ongoing support and optimization",
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {phase.step}
                  </div>
                  <div className="text-3xl mb-3">{phase.icon}</div>
                  <h3 className="text-lg font-semibold text-zion-blue mb-2">{phase.title}</h3>
                  <p className="text-zion-slate-light text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Harness the Power of AI?</h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how AI can transform your business operations and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=AI Services Inquiry`}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
            >
              Start AI Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">AI Experts at Your Service</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our team of AI specialists is ready to help you navigate the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 AI Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">AI Lab tours available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}