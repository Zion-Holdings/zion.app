import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Lock,
  BarChart3,
  Target,
  Rocket
} from 'lucide-react';

const AIAutonomousSystems = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced algorithms that make intelligent decisions in real-time, optimizing business processes and outcomes.",
      benefits: ["Reduced decision latency", "Improved accuracy", "24/7 operation"]
    },
    {
      icon: Cpu,
      title: "Autonomous Process Automation",
      description: "Self-managing systems that handle complex workflows without human intervention.",
      benefits: ["Increased efficiency", "Cost reduction", "Error elimination"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-driven threat detection and response systems that protect your digital assets proactively.",
      benefits: ["Real-time monitoring", "Automated response", "Threat prevention"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and identify opportunities before they become apparent.",
      benefits: ["Strategic insights", "Risk mitigation", "Growth optimization"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing & Supply Chain",
      description: "Autonomous inventory management, predictive maintenance, and supply chain optimization.",
      icon: Database
    },
    {
      title: "Financial Services",
      description: "Automated trading, fraud detection, and risk assessment systems.",
      icon: BarChart3
    },
    {
      title: "Healthcare",
      description: "Patient monitoring, diagnostic assistance, and treatment optimization.",
      icon: Users
    },
    {
      title: "Retail & E-commerce",
      description: "Personalized recommendations, inventory management, and customer service automation.",
      icon: Target
    }
  ];

  const technologies = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Robotic Process Automation",
    "Edge Computing & IoT",
    "Quantum Computing Integration",
    "Blockchain & Distributed Systems",
    "Cloud-Native Architecture"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent, self-managing systems that operate autonomously 
              while delivering unprecedented efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-lg font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI autonomous systems are built on cutting-edge technology, designed to deliver 
              intelligent automation across all aspects of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-cyan-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI autonomous systems are revolutionizing industries across the globe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest advancements in artificial intelligence and autonomous systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI autonomous systems can revolutionize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystems;