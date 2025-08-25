import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star, Settings } from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns and adapts to your business processes"
    },
    {
      icon: Zap,
      title: "Real-time Operations",
      description: "24/7 autonomous business operations with instant response capabilities"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with built-in compliance monitoring"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics and insights for continuous optimization"
    }
  ];

  const capabilities = [
    "Process Automation & Optimization",
    "Intelligent Decision Making",
    "Resource Management & Allocation",
    "Customer Service Automation",
    "Financial Operations & Reporting",
    "Supply Chain Management",
    "Quality Control & Monitoring",
    "Risk Assessment & Mitigation"
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Increase efficiency and productivity",
    "24/7 autonomous operations",
    "Real-time monitoring and alerts",
    "Scalable business processes",
    "Data-driven decision making",
    "Improved customer satisfaction",
    "Compliance automation"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Logistics & Transportation",
    "Energy & Utilities",
    "Professional Services",
    "Government & Public Sector"
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge autonomous operations platform. 
            Let AI handle your business processes while you focus on growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Automation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/ai-autonomous-systems"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
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
              Revolutionary Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make our platform the future of business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-green-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Business Automation
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform covers every aspect of business operations, from customer service 
                to financial management, all running autonomously with AI oversight.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Settings className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Platform Benefits</h3>
                  <p className="text-gray-300">Transform your business operations today</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous operations platform is designed to work across all industries, 
              with specialized solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses that have already transformed their operations 
            with our autonomous platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}