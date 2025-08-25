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
  Settings,
  HardDrive,
  Wifi,
  Lock
} from 'lucide-react';

const SpecializedITInfrastructure = () => {
  const specializations = [
    {
      icon: Server,
      title: "High-Performance Computing",
      description: "Specialized infrastructure for compute-intensive workloads including AI training, scientific computing, and big data processing.",
      benefits: ["Maximum performance", "Scalable architecture", "Optimized for workloads", "Cost-effective scaling"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Enterprise Data Centers",
      description: "Tier-4 data center solutions with redundant systems, disaster recovery, and enterprise-grade security.",
      benefits: ["99.99% uptime", "Redundant systems", "Disaster recovery", "Enterprise security"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Advanced Networking",
      description: "Software-defined networking, SD-WAN, and network virtualization for complex enterprise environments.",
      benefits: ["SDN implementation", "Network virtualization", "Advanced routing", "Traffic optimization"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Solutions",
      description: "Seamless integration between on-premises infrastructure and multiple cloud platforms.",
      benefits: ["Multi-cloud strategy", "Hybrid integration", "Cost optimization", "Flexible deployment"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Infrastructure Assessment",
      description: "Comprehensive analysis of your current infrastructure to identify optimization opportunities.",
      icon: Monitor
    },
    {
      title: "Custom Architecture Design",
      description: "Tailored infrastructure design based on your specific business requirements and growth plans.",
      icon: Settings
    },
    {
      title: "Migration & Implementation",
      description: "Seamless migration from legacy systems to modern, specialized infrastructure.",
      icon: Rocket
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak infrastructure performance.",
      icon: Zap
    },
    {
      title: "Security Hardening",
      description: "Advanced security measures and compliance with industry standards and regulations.",
      icon: Shield
    },
    {
      title: "24/7 Infrastructure Support",
      description: "Round-the-clock technical support and maintenance for your specialized infrastructure.",
      icon: Users
    }
  ];

  const technologies = [
    "VMware & Hyper-V",
    "Kubernetes & Docker",
    "Software-Defined Storage",
    "Network Function Virtualization",
    "Infrastructure as Code",
    "Automated Orchestration",
    "Advanced Monitoring",
    "AI-Powered Optimization"
  ];

  const benefits = [
    {
      title: "Maximum Performance",
      description: "Optimized infrastructure that delivers the highest possible performance for your workloads.",
      icon: Zap
    },
    {
      title: "Scalability",
      description: "Infrastructure that grows seamlessly with your business needs and demands.",
      icon: Target
    },
    {
      title: "Cost Efficiency",
      description: "Optimized resource utilization and cost-effective infrastructure management.",
      icon: BarChart3
    },
    {
      title: "Reliability",
      description: "Enterprise-grade reliability with redundant systems and disaster recovery.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Specialized IT Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Custom-built infrastructure solutions designed specifically for your business requirements, 
              delivering maximum performance, reliability, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-teal-500/30"
              >
                Design Infrastructure
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-teal-400/50 text-teal-400 rounded-lg hover:bg-teal-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Infrastructure Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Specializations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our specialized infrastructure solutions are designed to meet the unique requirements 
              of different business domains and workloads.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {specializations.map((specialization, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${specialization.color} rounded-lg flex items-center justify-center`}>
                    <specialization.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{specialization.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{specialization.description}</p>
                <div className="space-y-2">
                  {specialization.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-teal-400">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
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
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end services to design, implement, and maintain your specialized infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
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
              Why Choose Specialized Infrastructure?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized infrastructure provides advantages that generic solutions cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
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
              Built on industry-leading technologies and best practices for specialized infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-teal-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Specialized Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how specialized infrastructure can optimize your business operations and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Start Planning
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-teal-400/50 text-teal-400 rounded-lg hover:bg-teal-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecializedITInfrastructure;