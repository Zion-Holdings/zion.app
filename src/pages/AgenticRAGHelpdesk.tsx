import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Zap, Users, Shield, BarChart3, Globe, Cpu } from 'lucide-react';

const AgenticRAGHelpdesk: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Conversations",
      description: "AI-powered conversations that understand context and provide accurate responses"
    },
    {
      icon: Brain,
      title: "Knowledge Retrieval",
      description: "Advanced RAG technology to find and synthesize information from multiple sources"
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuous improvement through user interactions and feedback"
    },
    {
      icon: Users,
      title: "Multi-language Support",
      description: "Support for multiple languages and cultural contexts"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with data privacy and compliance features"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting on helpdesk performance and user satisfaction"
    }
  ];

  const capabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP to understand user intent and provide relevant responses",
      icon: Brain,
      features: ["Intent recognition", "Entity extraction", "Sentiment analysis", "Context understanding"]
    },
    {
      title: "Knowledge Management",
      description: "Centralized knowledge base with intelligent search and retrieval",
      icon: Globe,
      features: ["Document indexing", "Semantic search", "Knowledge graphs", "Content updates"]
    },
    {
      title: "Automated Responses",
      description: "Instant responses to common questions and issues",
      icon: Zap,
      features: ["FAQ automation", "Ticket routing", "Escalation rules", "Response templates"]
    },
    {
      title: "Human-AI Collaboration",
      description: "Seamless handoff between AI and human agents when needed",
      icon: Users,
      features: ["Smart routing", "Agent assistance", "Knowledge sharing", "Performance tracking"]
    }
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 customer support with instant responses and intelligent routing",
      icon: MessageCircle,
      examples: ["Product support", "Technical assistance", "Order inquiries", "Account management"]
    },
    {
      title: "Employee Helpdesk",
      description: "Internal support for employees across all departments",
      icon: Users,
      examples: ["IT support", "HR questions", "Policy information", "Training resources"]
    },
    {
      title: "Knowledge Base",
      description: "Intelligent search and retrieval of organizational knowledge",
      icon: Brain,
      examples: ["Documentation", "Best practices", "Procedures", "Reference materials"]
    },
    {
      title: "Training & Onboarding",
      description: "Automated training and onboarding support for new employees",
      icon: Globe,
      examples: ["Orientation", "Skill development", "Compliance training", "Performance support"]
    }
  ];

  const benefits = [
    {
      title: "Response Time",
      description: "Reduce response time from hours to seconds",
      metric: "99%"
    },
    {
      title: "Customer Satisfaction",
      description: "Improve customer satisfaction scores",
      metric: "4.8/5"
    },
    {
      title: "Cost Reduction",
      description: "Lower support costs through automation",
      metric: "40-60%"
    },
    {
      title: "Agent Productivity",
      description: "Increase agent productivity and efficiency",
      metric: "3x"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Agentic RAG Helpdesk
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered intelligent helpdesk solutions. Our 
              agentic RAG technology provides instant, accurate responses while learning and improving continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-teal-500 text-teal-400 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400">Advanced AI-powered helpdesk capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-400">Powerful AI technology to enhance your helpdesk operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{capability.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-xl text-gray-400">Versatile solutions for various support scenarios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact on your support operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-teal-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing helpdesk and CRM tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Zendesk", "Freshdesk", "Intercom", "Help Scout", "Zoho Desk", "ServiceNow",
              "Salesforce", "HubSpot", "Microsoft Dynamics", "Slack", "Teams", "Discord"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-teal-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Helpdesk?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading companies that have revolutionized their customer support with AI-powered 
            helpdesk solutions. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-teal-500 text-teal-400 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticRAGHelpdesk;