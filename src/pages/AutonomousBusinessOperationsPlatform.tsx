import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Shield, TrendingUp, Users, Globe, Cpu, BarChart3 } from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns and adapts to your business processes"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Continuous monitoring and optimization of business operations in real-time"
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Enterprise-grade security with advanced threat detection and prevention"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Comprehensive insights and metrics to drive continuous improvement"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing team workflows and tools"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Scale operations across multiple locations and time zones effortlessly"
    }
  ];

  const modules = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent decision-making",
      icon: Bot,
      features: ["Workflow automation", "Document processing", "Email management", "Task scheduling"]
    },
    {
      title: "Resource Management",
      description: "Optimize resource allocation and utilization across your organization",
      icon: BarChart3,
      features: ["Human resources", "Equipment tracking", "Budget management", "Capacity planning"]
    },
    {
      title: "Customer Service",
      description: "AI-powered customer support with 24/7 availability and intelligent routing",
      icon: Users,
      features: ["Chatbot support", "Ticket management", "Customer analytics", "Self-service portals"]
    },
    {
      title: "Supply Chain",
      description: "End-to-end supply chain visibility and optimization",
      icon: Globe,
      features: ["Inventory management", "Supplier coordination", "Logistics optimization", "Demand forecasting"]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 40% through intelligent automation",
      metric: "40%"
    },
    {
      title: "Efficiency Gain",
      description: "Improve operational efficiency and productivity across all departments",
      metric: "3x"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors and ensure consistent quality standards",
      metric: "90%"
    },
    {
      title: "Scalability",
      description: "Scale operations without proportional increase in overhead costs",
      metric: "10x"
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered autonomous operations. Our platform automates, 
              optimizes, and scales your business processes while you focus on strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
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
            <p className="text-xl text-gray-400">Everything you need to automate and optimize your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Modules Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Modules</h2>
            <p className="text-xl text-gray-400">Comprehensive solutions for every aspect of your business</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{module.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{module.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact on your business performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing tools and systems</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Salesforce", "HubSpot", "Slack", "Microsoft 365", "Google Workspace", "Zapier",
              "QuickBooks", "Shopify", "WooCommerce", "Magento", "AWS", "Azure"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-green-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have transformed their operations with our 
            autonomous platform. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform;