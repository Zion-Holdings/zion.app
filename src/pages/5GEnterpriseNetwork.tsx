import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, Globe, BarChart3, Users, Cpu, Network } from 'lucide-react';

const FiveGEnterpriseNetwork: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G speeds for enterprise applications"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-low latency for real-time applications and IoT"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols for enterprise networks"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage and roaming"
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Comprehensive network monitoring and analytics"
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Scalable network solutions for growing enterprises"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Smart factory automation and IoT device management",
      icon: Cpu,
      examples: ["Industrial IoT", "Predictive maintenance", "Quality control", "Supply chain optimization"]
    },
    {
      title: "Healthcare",
      description: "Telemedicine and connected medical devices",
      icon: Users,
      examples: ["Remote monitoring", "Telehealth", "Medical IoT", "Emergency response"]
    },
    {
      title: "Transportation",
      description: "Connected vehicles and smart transportation systems",
      icon: Globe,
      examples: ["Autonomous vehicles", "Traffic management", "Fleet tracking", "Public transit"]
    },
    {
      title: "Retail",
      description: "Smart retail and customer experience enhancement",
      icon: BarChart3,
      examples: ["Inventory management", "Customer analytics", "Mobile payments", "Augmented reality"]
    }
  ];

  const networkFeatures = [
    {
      title: "Network Slicing",
      description: "Virtual network segments for different applications",
      features: ["Quality of service", "Bandwidth allocation", "Security isolation", "Customization"]
    },
    {
      title: "Edge Computing",
      description: "Distributed computing at the network edge",
      features: ["Local processing", "Reduced latency", "Bandwidth optimization", "Real-time analytics"]
    },
    {
      title: "Massive IoT",
      description: "Support for millions of connected devices",
      features: ["Device management", "Data collection", "Analytics", "Automation"]
    },
    {
      title: "Network Security",
      description: "Advanced security for enterprise 5G networks",
      features: ["Encryption", "Authentication", "Threat detection", "Compliance"]
    }
  ];

  const benefits = [
    {
      title: "Speed",
      description: "Up to 100x faster than 4G networks",
      metric: "100x"
    },
    {
      title: "Latency",
      description: "Ultra-low latency for real-time applications",
      metric: "1ms"
    },
    {
      title: "Capacity",
      description: "Support for massive device connectivity",
      metric: "1M+"
    },
    {
      title: "Efficiency",
      description: "Improved energy efficiency and cost savings",
      metric: "90%"
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
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <Wifi className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              5G Enterprise Network Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with next-generation 5G network solutions. Experience 
              ultra-fast speeds, ultra-low latency, and massive IoT connectivity for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-blue-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Network Assessment
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="px-8 py-4 border border-yellow-500 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-200"
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
            <h2 className="text-4xl font-bold mb-4">5G Network Features</h2>
            <p className="text-xl text-gray-400">Advanced capabilities for enterprise networking</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Use Cases</h2>
            <p className="text-xl text-gray-400">Transform industries with 5G technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Network Features</h2>
            <p className="text-xl text-gray-400">Cutting-edge 5G network capabilities</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {networkFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      {item}
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
            <h2 className="text-4xl font-bold mb-4">5G Network Benefits</h2>
            <p className="text-xl text-gray-400">See the real impact of 5G technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{benefit.metric}</div>
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
            <h2 className="text-4xl font-bold mb-4">Network Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing network infrastructure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Cisco", "Juniper", "Aruba", "Ruckus", "Ubiquiti", "MikroTik",
              "Fortinet", "Palo Alto", "Check Point", "F5 Networks", "Citrix", "VMware"
            ].map((vendor, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-yellow-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{vendor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for the 5G Revolution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises that are already leveraging 5G technology to transform 
            their operations. Start your 5G journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-blue-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Network Assessment
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-yellow-500 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseNetwork;