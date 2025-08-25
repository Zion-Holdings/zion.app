import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Zap, Shield, BarChart3, Globe, Users, Database, Settings } from 'lucide-react';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G network speeds for enterprise applications and data transfer."
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-low latency for real-time applications and critical business operations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and private network solutions for enterprise use."
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Comprehensive network monitoring and performance analytics for optimization."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming capabilities."
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Flexible and scalable 5G solutions that grow with your business needs."
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "5G-powered IoT sensors and real-time monitoring for industrial automation."
    },
    {
      title: "Remote Work",
      description: "High-speed connectivity for remote teams and virtual collaboration platforms."
    },
    {
      title: "Autonomous Vehicles",
      description: "Low-latency communication for autonomous vehicle fleets and logistics."
    },
    {
      title: "Healthcare",
      description: "Real-time telemedicine and remote patient monitoring with 5G connectivity."
    },
    {
      title: "Financial Services",
      description: "Ultra-fast trading platforms and secure financial data transmission."
    },
    {
      title: "Retail",
      description: "Enhanced customer experiences with AR/VR and smart retail solutions."
    }
  ];

  const benefits = [
    {
      metric: "10x",
      label: "Faster Speed",
      description: "Dramatically faster data transfer and network performance"
    },
    {
      metric: "1ms",
      label: "Ultra-Low Latency",
      description: "Near-instantaneous response times for critical applications"
    },
    {
      metric: "100x",
      label: "More Devices",
      description: "Support for massive IoT device connectivity"
    },
    {
      metric: "99.9%",
      label: "Reliability",
      description: "Enterprise-grade network reliability and uptime"
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
              <Wifi className="w-4 h-4 mr-2" />
              5G Enterprise Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience unprecedented speed, reliability, and connectivity for the future of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300">
                Schedule Demo
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
              Revolutionary 5G Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of wireless technology with enterprise-grade 5G solutions.
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
              Our 5G enterprise solutions provide comprehensive capabilities designed for modern businesses.
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

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new business models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {useCase.description}
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
            Ready to Embrace 5G Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises that are already experiencing the benefits of 5G connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseSolutions;