import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, BarChart3, Zap, Database, Network, Cpu, HardDrive } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: "Real-time Asset Monitoring",
      description: "Continuous monitoring of all IT assets with AI-powered anomaly detection"
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance reporting for all assets"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI-driven insights to predict maintenance needs and optimize asset lifecycle"
    },
    {
      icon: Zap,
      title: "Automated Management",
      description: "Intelligent automation of routine IT asset management tasks"
    },
    {
      icon: Database,
      title: "Centralized Inventory",
      description: "Comprehensive asset database with real-time updates and tracking"
    },
    {
      icon: Network,
      title: "Network Discovery",
      description: "Automatic discovery and mapping of network-connected assets"
    }
  ];

  const assetTypes = [
    {
      category: "Hardware Assets",
      items: ["Servers", "Workstations", "Laptops", "Mobile Devices", "Network Equipment", "Storage Devices"],
      icon: Cpu
    },
    {
      category: "Software Assets",
      items: ["Operating Systems", "Applications", "Licenses", "Cloud Services", "Development Tools", "Security Software"],
      icon: Monitor
    },
    {
      category: "Network Assets",
      items: ["Routers", "Switches", "Firewalls", "Access Points", "Cables", "Network Security"],
      icon: Network
    },
    {
      category: "Data Assets",
      items: ["Databases", "File Systems", "Backups", "Archives", "Cloud Storage", "Data Security"],
      icon: HardDrive
    }
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce IT costs by 25-40% through better asset utilization",
      metric: "25-40%"
    },
    {
      title: "Risk Reduction",
      description: "Minimize security risks and compliance violations",
      metric: "90%"
    },
    {
      title: "Efficiency Gain",
      description: "Improve IT team productivity and response times",
      metric: "3x"
    },
    {
      title: "Lifecycle Management",
      description: "Extend asset lifespan through predictive maintenance",
      metric: "2x"
    }
  ];

  const capabilities = [
    {
      title: "Asset Discovery & Inventory",
      description: "Automatically discover and catalog all IT assets across your organization",
      features: ["Network scanning", "Agent-based discovery", "Cloud asset detection", "License tracking"]
    },
    {
      title: "Lifecycle Management",
      description: "Track assets from procurement to retirement with full audit trail",
      features: ["Procurement tracking", "Deployment management", "Maintenance scheduling", "Retirement planning"]
    },
    {
      title: "Security & Compliance",
      description: "Ensure all assets meet security standards and compliance requirements",
      features: ["Security scanning", "Compliance reporting", "Vulnerability assessment", "Policy enforcement"]
    },
    {
      title: "Performance Monitoring",
      description: "Monitor asset performance and health in real-time",
      features: ["Performance metrics", "Health monitoring", "Capacity planning", "Optimization recommendations"]
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
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take control of your IT infrastructure with intelligent asset management. Our AI-powered 
              platform provides complete visibility, security, and optimization of all your IT assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
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
            <p className="text-xl text-gray-400">Comprehensive IT asset management powered by artificial intelligence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Asset Types Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Asset Coverage</h2>
            <p className="text-xl text-gray-400">Manage all types of IT assets in one unified platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{type.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {type.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-400">Powerful tools to manage your IT infrastructure effectively</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact on your IT operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
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
            <h2 className="text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing IT tools and systems</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Active Directory", "SCCM", "ServiceNow", "Jira", "Confluence", "Slack",
              "Microsoft 365", "Google Workspace", "AWS", "Azure", "GCP", "VMware"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Assets?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get complete visibility and control over your IT infrastructure. Start your 
            AI-powered asset management journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
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