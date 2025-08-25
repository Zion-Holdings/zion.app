import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Users, Target, Shield, Cpu, Globe, Rocket, Star, ArrowRight, CheckCircle, Play, BookOpen, Code, Database, Cloud, Lock, BarChart3, TrendingUp, Settings, Monitor, Building, ShoppingCart, Briefcase } from 'lucide-react';

export default function AIAutonomousBusinessManager() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered business decisions based on real-time data analysis and predictive modeling'
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Self-managing business processes that optimize efficiency and reduce manual intervention'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Intelligent resource allocation and team management across all departments'
    },
    {
      icon: Target,
      title: 'Goal Optimization',
      description: 'Continuous alignment of business activities with strategic objectives and KPIs'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of business risks and compliance issues'
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Cloud-native platform that grows with your business from startup to enterprise'
    }
  ];

  const capabilities = [
    {
      title: 'Financial Management',
      description: 'Automated budgeting, forecasting, and financial reporting with AI insights',
      icon: BarChart3
    },
    {
      title: 'Operations Optimization',
      description: 'Streamline workflows, reduce bottlenecks, and maximize operational efficiency',
      icon: Settings
    },
    {
      title: 'Customer Experience',
      description: 'Personalized customer interactions and automated support systems',
      icon: Users
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time dashboards and automated performance tracking across all metrics',
      icon: Monitor
    }
  ];

  const useCases = [
    {
      title: 'Startup Growth',
      description: 'Scale operations efficiently while maintaining quality and customer satisfaction',
      icon: Rocket
    },
    {
      title: 'Enterprise Operations',
      description: 'Optimize complex business processes across multiple departments and locations',
      icon: Building
    },
    {
      title: 'E-commerce Management',
      description: 'Automate inventory, pricing, and customer service for online businesses',
      icon: ShoppingCart
    },
    {
      title: 'Service Business',
      description: 'Streamline service delivery, scheduling, and resource allocation',
      icon: Briefcase
    }
  ];

  const benefits = [
    'Reduce operational costs by 30-50%',
    'Improve decision-making speed by 80%',
    'Increase customer satisfaction by 40%',
    'Enable 24/7 business operations',
    'Provide real-time business insights',
    'Scale operations without proportional cost increase'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI Autonomous Business Manager</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Business
              <br />
              <span className="text-white">Runs Itself</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business into a self-managing, AI-powered operation that continuously 
              optimizes performance, reduces costs, and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Learn More
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
              Autonomous Business Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of business management with AI that thinks, learns, and adapts
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

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Business Management
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From finance to operations, our AI manages every aspect of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you're a startup or enterprise, AI Autonomous Business Manager adapts to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                      <p className="text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See real results with our autonomous business management platform
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join forward-thinking businesses that are already operating autonomously with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}