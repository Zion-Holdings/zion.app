import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Server,
  ArrowRight,
  Star,
  Users
} from 'lucide-react';

const QuantumEdgeComputingPlatform = () => {
  const features = [
    "Quantum-accelerated edge processing",
    "Real-time data analysis and insights",
    "Distributed quantum computing nodes",
    "Advanced machine learning integration",
    "Secure quantum encryption protocols",
    "Scalable edge infrastructure",
    "Low-latency quantum communication",
    "Energy-efficient quantum operations"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Quantum Performance",
      description: "Leverage quantum computing principles for unprecedented processing speed and efficiency"
    },
    {
      icon: Users,
      title: "Global Edge Network",
      description: "Distributed quantum nodes across strategic global locations for optimal performance"
    },
    {
      icon: Users,
      title: "Quantum Security",
      description: "Advanced quantum encryption and security protocols for maximum data protection"
    },
    {
      icon: Users,
      title: "Scalable Architecture",
      description: "Flexible scaling from small deployments to enterprise-wide quantum networks"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,299",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 10 quantum edge nodes",
        "Basic quantum processing capabilities",
        "Standard security protocols",
        "Email support",
        "Basic analytics dashboard"
      ]
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 50 quantum edge nodes",
        "Advanced quantum algorithms",
        "Enhanced security features",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited quantum edge nodes",
        "Custom quantum algorithm development",
        "Military-grade security",
        "24/7 dedicated support",
        "Custom analytics & AI models",
        "On-site implementation support",
        "SLA guarantees"
      ]
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Real-time risk assessment and algorithmic trading with quantum speed",
      icon: Users
    },
    {
      title: "Healthcare",
      description: "Instant medical imaging analysis and drug discovery acceleration",
      icon: Users
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance and quality control with quantum precision",
      icon: Server
    },
    {
      title: "Research & Development",
      description: "Complex simulations and data analysis at quantum speeds",
      icon: Server
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Server className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Quantum Edge Computing Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary edge computing platform that leverages quantum computing principles to deliver 
            unprecedented performance and efficiency for distributed applications.
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
              Request Demo
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 500+ enterprises</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>10x performance improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of edge computing with our revolutionary quantum technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose Quantum Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with the power of quantum technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum edge computing is revolutionizing various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
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
              Choose the perfect plan for your quantum computing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                  : 'border-gray-700/50 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
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
            Ready to Experience Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the quantum revolution and transform your business with unprecedented computing power
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Quantum Journey
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumEdgeComputingPlatform;