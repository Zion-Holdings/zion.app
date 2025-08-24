import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Network, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';

const ZeroTrustNetworkArchitecture = () => {
  const features = [
    "Identity verification & authentication",
    "Continuous monitoring & validation",
    "Micro-segmentation",
    "Least privilege access",
    "Real-time threat detection",
    "Encrypted communications",
    "Multi-factor authentication",
    "Behavioral analytics"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Eliminate trust assumptions and verify every access request"
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "Real-time visibility into network activities and potential threats"
    },
    {
      icon: TrendingUp,
      title: "Reduced Risk",
      description: "Minimize attack surface and prevent lateral movement"
    },
    {
      icon: Zap,
      title: "Compliance Ready",
      description: "Meet regulatory requirements with comprehensive security controls"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,199",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic zero trust implementation",
        "Up to 100 users",
        "Standard security policies",
        "Email support",
        "Basic threat monitoring",
        "SSL/TLS encryption"
      ]
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced zero trust architecture",
        "Up to 1000 users",
        "Custom security policies",
        "Priority support",
        "Advanced threat detection",
        "Multi-factor authentication",
        "Custom integration support",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Complete zero trust ecosystem",
        "Unlimited users",
        "Custom security frameworks",
        "24/7 dedicated support",
        "AI-powered threat intelligence",
        "Advanced analytics & reporting",
        "On-site implementation",
        "SLA guarantees",
        "Custom training programs"
      ]
    }
  ];

  const useCases = [
    {
      title: "Remote Workforce",
      description: "Secure access for distributed teams with zero trust principles",
      icon: Users
    },
    {
      title: "Cloud Migration",
      description: "Secure cloud adoption with zero trust security framework",
      icon: Globe
    },
    {
      title: "IoT Security",
      description: "Protect connected devices with zero trust network segmentation",
      icon: Network
    },
    {
      title: "Data Protection",
      description: "Safeguard sensitive data with granular access controls",
      icon: Lock
    }
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Government",
    "Manufacturing",
    "Retail",
    "Education",
    "Technology",
    "Energy & Utilities"
  ];

  const securityLayers = [
    {
      title: "Identity Layer",
      description: "Multi-factor authentication and identity verification",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Device Layer",
      description: "Device health checks and compliance validation",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Network Layer",
      description: "Micro-segmentation and encrypted communications",
      icon: Network,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Application Layer",
      description: "Application-level security and access controls",
      icon: Lock,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Zero Trust Network Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive cybersecurity solution implementing zero-trust principles across your entire 
            network infrastructure for maximum security and protection against modern cyber threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Security Assessment
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 200+ enterprises</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span>99.99% security uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>95% reduction in security incidents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Zero Trust Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience comprehensive security with our zero trust architecture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection across all network layers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${layer.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                  <p className="text-gray-300">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose Zero Trust Security?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your security posture with zero trust principles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Security Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how zero trust security protects various business scenarios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Industries We Protect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zero trust security solutions for all major industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500 shadow-lg shadow-red-500/20' 
                  : 'border-gray-700/50 hover:border-red-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Secure Your Network?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of organizations that trust us with their cybersecurity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Security Journey
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule Security Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustNetworkArchitecture;