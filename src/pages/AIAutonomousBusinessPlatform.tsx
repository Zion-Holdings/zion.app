import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Code, Database, Cloud, Lock, BarChart3, Settings, Monitor, Building } from 'lucide-react';

export default function AIAutonomousBusinessPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Business Automation',
      description: 'AI-powered platform that automates complex business processes and decision-making'
    },
    {
      icon: Zap,
      title: 'Real-time Operations',
      description: 'Continuous monitoring and optimization of business operations 24/7'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless coordination between human teams and AI systems'
    },
    {
      icon: Target,
      title: 'Strategic Alignment',
      description: 'Automatic alignment of operations with business goals and KPIs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance monitoring and audit trails'
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Cloud-native platform that grows with your business needs'
    }
  ];

  const platformModules = [
    {
      title: 'Financial Management',
      description: 'Automated budgeting, forecasting, and financial reporting',
      icon: BarChart3
    },
    {
      title: 'Operations Management',
      description: 'Streamlined workflows and process optimization',
      icon: Settings
    },
    {
      title: 'Customer Experience',
      description: 'Personalized interactions and automated support',
      icon: Users
    },
    {
      title: 'Performance Analytics',
      description: 'Real-time insights and predictive analytics',
      icon: Monitor
    }
  ];

  const benefits = [
    'Reduce operational costs by 40-60%',
    'Improve efficiency by 70%',
    'Enable 24/7 business operations',
    'Provide real-time business insights',
    'Scale operations automatically',
    'Ensure compliance and risk management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI Autonomous Business Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The Complete
              <br />
              <span className="text-white">Business Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with a comprehensive AI platform that manages operations, 
              optimizes performance, and drives growth autonomously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Platform Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Platform Guide
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to run your business autonomously with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integrated Platform Modules
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive modules that work together seamlessly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                      <p className="text-gray-400">{module.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business operations with measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join leading businesses using our AI Autonomous Business Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Get Platform Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Platform Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}