import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Zap, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp, 
  Database,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings,
  Cloud
} from 'lucide-react';

const MicroSAASSolutions = () => {
  const features = [
    {
      icon: Package,
      title: "Lightweight Applications",
      description: "Small, focused applications that solve specific business problems without overwhelming complexity.",
      benefits: ["Fast deployment", "Easy maintenance", "Focused functionality"]
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Quick development cycles that allow you to iterate and improve your solutions rapidly.",
      benefits: ["Quick time-to-market", "Agile development", "Continuous improvement"]
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Applications designed with the end-user in mind, ensuring high adoption and satisfaction rates.",
      benefits: ["High user adoption", "Intuitive interfaces", "Customer satisfaction"]
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
      benefits: ["Flexible scaling", "Cost-effective growth", "Future-proof design"]
    }
  ];

  const services = [
    {
      title: "Custom Micro SAAS",
      description: "Tailored micro applications designed specifically for your business needs and workflows.",
      icon: Settings
    },
    {
      title: "Integration Services",
      description: "Seamless integration with existing systems and third-party applications.",
      icon: Cpu
    },
    {
      title: "API Development",
      description: "Robust APIs that enable your micro SAAS to communicate with other systems.",
      icon: Database
    },
    {
      title: "Cloud Deployment",
      description: "Scalable cloud deployment with automatic scaling and high availability.",
      icon: Cloud
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your applications.",
      icon: Monitor
    },
    {
      title: "Analytics & Insights",
      description: "Built-in analytics to track usage, performance, and user behavior.",
      icon: BarChart3
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "GraphQL APIs",
    "Real-time WebSockets"
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Lower development and maintenance costs compared to large enterprise applications.",
      icon: TrendingUp
    },
    {
      title: "Faster Deployment",
      description: "Get your solutions to market quickly with streamlined development processes.",
      icon: Rocket
    },
    {
      title: "Easier Maintenance",
      description: "Simplified codebases that are easier to maintain and update.",
      icon: Settings
    },
    {
      title: "Better User Experience",
      description: "Focused applications that provide superior user experience and satisfaction.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build focused, scalable software solutions that solve specific business problems 
              without the complexity of traditional enterprise applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Start Building
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Micro SAAS Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our micro SAAS approach delivers focused solutions that are fast, efficient, 
              and perfectly suited to your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-purple-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end services to build, deploy, and maintain your micro SAAS applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Micro SAAS solutions offer significant advantages over traditional enterprise applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with modern, scalable technologies that ensure performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how micro SAAS solutions can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Project
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutions;