import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Zap, Users, ArrowRight, CheckCircle, Star, Headphones, Shield } from 'lucide-react';

export default function AgenticRAGHelpdesk() {
  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Conversations",
      description: "AI-powered conversations that understand context and provide accurate responses"
    },
    {
      icon: Brain,
      title: "Advanced RAG Technology",
      description: "Retrieval-Augmented Generation for intelligent knowledge retrieval and responses"
    },
    {
      icon: Zap,
      title: "Real-time Support",
      description: "Instant responses and 24/7 availability for customer support"
    },
    {
      icon: Users,
      title: "Multi-channel Support",
      description: "Seamless support across chat, email, phone, and social media"
    }
  ];

  const capabilities = [
    "Intelligent Query Understanding",
    "Context-Aware Responses",
    "Multi-language Support",
    "Knowledge Base Integration",
    "Automated Ticket Routing",
    "Sentiment Analysis",
    "Performance Analytics",
    "Seamless Human Handoff"
  ];

  const benefits = [
    "Reduce support response time by 80%",
    "Increase customer satisfaction by 60%",
    "Handle 10x more support requests",
    "24/7 automated support availability",
    "Consistent and accurate responses",
    "Reduce support agent workload",
    "Multi-language support capabilities",
    "Scalable support operations"
  ];

  const useCases = [
    "Customer Support",
    "Technical Support",
    "Sales Inquiries",
    "Product Information",
    "Troubleshooting",
    "Order Status",
    "Account Management",
    "General Inquiries"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Agentic RAG Helpdesk
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your customer support with our intelligent AI-powered helpdesk. 
            Leveraging advanced RAG technology for accurate, context-aware responses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Support Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make customer support intelligent, 
              efficient, and always available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-teal-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our RAG-powered helpdesk provides intelligent, context-aware support 
                that understands and resolves customer issues efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Headphones className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Support Benefits</h3>
                  <p className="text-gray-300">Transform your customer support today</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Across All Channels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent helpdesk handles every type of customer inquiry, 
              providing consistent and accurate support across all touchpoints.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations that have already revolutionized their customer support 
            with AI-powered intelligent helpdesk solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}