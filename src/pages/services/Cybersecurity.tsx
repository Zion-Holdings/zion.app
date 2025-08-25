import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Network,
  Key,
  Monitor
} from 'lucide-react';

const Cybersecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security systems that detect, prevent, and respond to sophisticated cyber threats in real-time.",
      benefits: ["Real-time monitoring", "AI-powered detection", "Automated response"]
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive security framework that verifies every user, device, and transaction before granting access.",
      benefits: ["Identity verification", "Continuous monitoring", "Least privilege access"]
    },
    {
      icon: Eye,
      title: "Security Operations Center",
      description: "24/7 monitoring and incident response services that provide round-the-clock protection for your digital assets.",
      benefits: ["24/7 monitoring", "Expert analysts", "Rapid response"]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid detection, containment, and recovery services to minimize damage from security incidents.",
      benefits: ["Quick detection", "Minimal downtime", "Full recovery"]
    }
  ];

  const services = [
    {
      title: "Network Security",
      description: "Firewalls, intrusion detection systems, and network monitoring to protect your infrastructure.",
      icon: Network
    },
    {
      title: "Endpoint Protection",
      description: "Advanced antivirus, device management, and threat prevention for all endpoints.",
      icon: Cpu
    },
    {
      title: "Data Protection",
      description: "Encryption, backup, and recovery solutions to safeguard your critical data.",
      icon: Database
    },
    {
      title: "Identity & Access Management",
      description: "Multi-factor authentication, single sign-on, and privileged access management.",
      icon: Key
    },
    {
      title: "Security Assessment",
      description: "Vulnerability assessments, penetration testing, and security audits.",
      icon: Target
    },
    {
      title: "Compliance & Governance",
      description: "GDPR, HIPAA, SOC 2, and industry-specific compliance solutions.",
      icon: Monitor
    }
  ];

  const technologies = [
    "AI-Powered Threat Detection",
    "Machine Learning Analytics",
    "Behavioral Analysis",
    "Quantum-Safe Cryptography",
    "Blockchain Security",
    "Cloud Security",
    "IoT Security",
    "Mobile Security"
  ];

  const benefits = [
    {
      title: "Proactive Protection",
      description: "Identify and neutralize threats before they can cause damage to your systems.",
      icon: Shield
    },
    {
      title: "Cost Reduction",
      description: "Prevent costly data breaches and minimize the impact of security incidents.",
      icon: TrendingUp
    },
    {
      title: "Compliance Assurance",
      description: "Meet regulatory requirements and industry standards with confidence.",
      icon: Target
    },
    {
      title: "Business Continuity",
      description: "Ensure your operations continue uninterrupted even during security events.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions that detect, 
              prevent, and respond to threats in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-red-500/30"
              >
                Secure Your Business
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Security Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cybersecurity solutions provide multi-layered protection 
              against evolving threats and ensure your business remains secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-red-400">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
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
              Our Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect every aspect of your digital infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
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
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions provide comprehensive protection and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
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
              Security Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on cutting-edge security technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-red-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait until it's too late. Protect your digital assets with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-red-500/30"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;