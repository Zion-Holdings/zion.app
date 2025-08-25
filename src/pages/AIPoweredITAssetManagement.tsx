import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, TrendingUp, Database, ArrowRight, CheckCircle, Star, BarChart3, Zap } from 'lucide-react';

export default function AIPoweredITAssetManagement() {
  const features = [
    {
      icon: Monitor,
      title: "Intelligent Asset Discovery",
      description: "AI-powered scanning and discovery of all IT assets across your infrastructure"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring and compliance reporting for all assets"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and predictive maintenance insights"
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single platform to manage all IT assets with comprehensive visibility"
    }
  ];

  const capabilities = [
    "Automated Asset Discovery & Inventory",
    "Real-time Asset Monitoring",
    "Predictive Maintenance Alerts",
    "Security Vulnerability Assessment",
    "Compliance & Audit Reporting",
    "Cost Optimization & ROI Analysis",
    "Asset Lifecycle Management",
    "Integration with Existing Systems"
  ];

  const benefits = [
    "Reduce IT asset management costs by 40%",
    "Improve asset utilization by 60%",
    "Prevent security breaches with AI monitoring",
    "Automate compliance reporting",
    "Optimize asset lifecycle decisions",
    "Real-time visibility across all assets",
    "Predictive maintenance to prevent downtime",
    "Streamlined procurement processes"
  ];

  const assetTypes = [
    "Hardware Assets",
    "Software Licenses",
    "Cloud Resources",
    "Network Equipment",
    "Security Devices",
    "Mobile Devices",
    "Virtual Machines",
    "Data Storage Systems"
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your IT asset management with AI-driven insights, automated discovery, 
            and intelligent optimization for maximum efficiency and cost savings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services/it-infrastructure"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
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
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful AI features that transform how you manage IT assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Asset Management
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our AI platform provides end-to-end IT asset management capabilities, 
                from discovery and monitoring to optimization and retirement planning.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Key Benefits</h3>
                  <p className="text-gray-300">Transform your IT asset management</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Manage All Types of IT Assets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware to cloud resources, our platform provides comprehensive 
              management for every type of IT asset in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {assetTypes.map((assetType, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{assetType}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Assets?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations that have transformed their IT asset management 
            with AI-powered insights and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}