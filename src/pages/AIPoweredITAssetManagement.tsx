import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, BarChart3, Zap, Users, Globe, Database, Settings } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: "Intelligent Asset Discovery",
      description: "Automated discovery and mapping of all IT assets across your infrastructure."
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Real-time security threat detection and vulnerability assessment for all assets."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting on asset performance, utilization, and health."
    },
    {
      icon: Zap,
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance to prevent downtime and optimize asset lifecycle."
    },
    {
      icon: Users,
      title: "User Access Management",
      description: "Comprehensive user access control and permission management across all assets."
    },
    {
      icon: Globe,
      title: "Multi-Cloud Support",
      description: "Unified management of assets across on-premises, cloud, and hybrid environments."
    }
  ];

  const assetTypes = [
    {
      title: "Hardware Assets",
      description: "Servers, workstations, networking equipment, and peripheral devices"
    },
    {
      title: "Software Assets",
      description: "Applications, operating systems, licenses, and development tools"
    },
    {
      title: "Cloud Resources",
      description: "Virtual machines, storage, databases, and cloud services"
    },
    {
      title: "Network Infrastructure",
      description: "Switches, routers, firewalls, and network security devices"
    },
    {
      title: "Data Assets",
      description: "Databases, file systems, backups, and data warehouses"
    },
    {
      title: "Security Assets",
      description: "Security tools, certificates, keys, and compliance systems"
    }
  ];

  const benefits = [
    {
      metric: "100%",
      label: "Asset Visibility",
      description: "Complete visibility into all IT assets across your organization"
    },
    {
      metric: "60%",
      label: "Cost Reduction",
      description: "Significant cost savings through optimized asset utilization"
    },
    {
      metric: "90%",
      label: "Security Improvement",
      description: "Enhanced security posture and threat detection capabilities"
    },
    {
      metric: "24/7",
      label: "Monitoring",
      description: "Continuous monitoring and alerting for all critical assets"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              AI-Powered IT Management
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your IT infrastructure management with intelligent asset tracking, security monitoring, and predictive maintenance powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your IT Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented visibility, control, and optimization of your IT infrastructure with AI-powered asset management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive IT asset management capabilities designed for modern enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Asset Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all types of IT assets from a single, intelligent platform with unified visibility and control.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTypes.map((assetType, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {assetType.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {assetType.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Assets?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our AI-powered platform for comprehensive IT asset management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;