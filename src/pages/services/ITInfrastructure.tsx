import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Database, 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings
} from 'lucide-react';

const ITInfrastructure = () => {
  const features = [
    {
      icon: Server,
      title: "Enterprise Server Management",
      description: "Comprehensive server infrastructure management including virtualization, clustering, and high availability solutions.",
      benefits: ["High availability", "Scalable architecture", "24/7 monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Multi-cloud solutions including AWS, Azure, and Google Cloud with hybrid cloud integration capabilities.",
      benefits: ["Flexible deployment", "Cost optimization", "Global reach"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Advanced networking solutions including SD-WAN, network security, and performance optimization.",
      benefits: ["High performance", "Secure connectivity", "Reliable uptime"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data storage, backup, and recovery solutions with disaster recovery planning.",
      benefits: ["Data protection", "Business continuity", "Compliance ready"]
    }
  ];

  const services = [
    {
      title: "Infrastructure Design",
      description: "Custom infrastructure architecture designed for your specific business needs and growth plans.",
      icon: Settings
    },
    {
      title: "Migration Services",
      description: "Seamless migration from legacy systems to modern cloud-native infrastructure.",
      icon: Rocket
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance and efficiency.",
      icon: Zap
    },
    {
      title: "Security Integration",
      description: "Built-in security measures and compliance with industry standards and regulations.",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services for your infrastructure.",
      icon: Monitor
    },
    {
      title: "Scalability Planning",
      description: "Future-proof infrastructure that grows with your business needs.",
      icon: BarChart3
    }
  ];

  const technologies = [
    "Virtualization (VMware, Hyper-V)",
    "Container Orchestration (Kubernetes)",
    "Software-Defined Networking (SDN)",
    "Storage Area Networks (SAN)",
    "Load Balancing & Clustering",
    "Backup & Disaster Recovery",
    "Monitoring & Analytics",
    "Automation & Orchestration"
  ];

  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Streamlined operations with automated processes and optimized workflows.",
      icon: Zap
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs through virtualization and cloud optimization.",
      icon: BarChart3
    },
    {
      title: "Business Continuity",
      description: "Ensure your business operations continue uninterrupted with reliable infrastructure.",
      icon: Shield
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern, scalable infrastructure that supports innovation.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build a robust, scalable, and secure IT foundation that powers your business growth 
              and enables digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-green-500/30"
              >
                Build Infrastructure
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-green-400/50 text-green-400 rounded-lg hover:bg-green-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Infrastructure Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive IT infrastructure solutions provide the foundation for modern, 
              scalable, and secure business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end infrastructure services designed to build, optimize, and maintain your IT foundation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
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
              Why Choose Our Infrastructure?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our infrastructure solutions deliver reliability, performance, and scalability for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
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
              Built on industry-leading technologies and best practices for enterprise infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-green-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT infrastructure solutions can support your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Start Planning
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-green-400/50 text-green-400 rounded-lg hover:bg-green-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructure;