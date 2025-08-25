import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, BarChart3, Globe, Cpu, Zap } from 'lucide-react';

const AdvancedCybersecuritySuite: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Advanced AI-powered threat detection and prevention systems"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Multi-factor authentication and identity management solutions"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Continuous vulnerability scanning and risk assessment"
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Comprehensive security metrics and reporting"
    },
    {
      icon: Globe,
      title: "Network Security",
      description: "Advanced firewall and network protection"
    }
  ];

  const securityModules = [
    {
      title: "Endpoint Protection",
      description: "Comprehensive protection for all devices and endpoints",
      icon: Cpu,
      features: ["Antivirus", "Firewall", "Device control", "Data loss prevention"]
    },
    {
      title: "Network Security",
      description: "Advanced network protection and monitoring",
      icon: Globe,
      features: ["Intrusion detection", "Traffic analysis", "VPN management", "Network segmentation"]
    },
    {
      title: "Cloud Security",
      description: "Secure cloud infrastructure and applications",
      icon: Shield,
      features: ["Cloud access security", "Data encryption", "Compliance monitoring", "Threat prevention"]
    },
    {
      title: "Identity & Access",
      description: "Secure identity management and access control",
      icon: Lock,
      features: ["Single sign-on", "Multi-factor auth", "Privileged access", "User provisioning"]
    }
  ];

  const complianceStandards = [
    {
      title: "SOC 2",
      description: "Service Organization Control 2 compliance",
      icon: Shield,
      features: ["Security", "Availability", "Processing integrity", "Confidentiality", "Privacy"]
    },
    {
      title: "ISO 27001",
      description: "Information security management system",
      icon: Lock,
      features: ["Risk assessment", "Security controls", "Incident management", "Business continuity"]
    },
    {
      title: "GDPR",
      description: "General Data Protection Regulation compliance",
      icon: Eye,
      features: ["Data protection", "Privacy rights", "Consent management", "Breach notification"]
    },
    {
      title: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      icon: AlertTriangle,
      features: ["Patient privacy", "Data security", "Access controls", "Audit trails"]
    }
  ];

  const benefits = [
    {
      title: "Threat Prevention",
      description: "Block 99.9% of cyber threats before they reach your systems",
      metric: "99.9%"
    },
    {
      title: "Incident Response",
      description: "Reduce incident response time from hours to minutes",
      metric: "90%"
    },
    {
      title: "Compliance",
      description: "Achieve and maintain regulatory compliance",
      metric: "100%"
    },
    {
      title: "Cost Savings",
      description: "Reduce security costs through automation and efficiency",
      metric: "40%"
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
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Advanced Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with enterprise-grade cybersecurity solutions. Our comprehensive 
              suite provides advanced threat detection, prevention, and response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/services/cybersecurity"
                className="px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
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
            <h2 className="text-4xl font-bold mb-4">Security Features</h2>
            <p className="text-xl text-gray-400">Comprehensive cybersecurity capabilities for modern threats</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Security Modules Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Modules</h2>
            <p className="text-xl text-gray-400">Modular security solutions for comprehensive protection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{module.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{module.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
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

      {/* Compliance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance Standards</h2>
            <p className="text-xl text-gray-400">Meet and exceed industry compliance requirements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{standard.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{standard.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {standard.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
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
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Benefits</h2>
            <p className="text-xl text-gray-400">Measurable improvements in your security posture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security Tool Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing security infrastructure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Active Directory", "Okta", "Duo", "CrowdStrike", "SentinelOne", "Carbon Black",
              "Palo Alto", "Cisco", "Fortinet", "Check Point", "Splunk", "QRadar"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-red-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our cybersecurity suite to protect their 
            critical assets and maintain compliance. Start your security transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedCybersecuritySuite;