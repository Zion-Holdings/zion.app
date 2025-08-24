import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Phone,
  Mail,
  Brain,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "Schedule a free consultation to discuss your needs",
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Solution Design",
      description: "We'll design a customized solution for your business",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Implementation",
      description: "Our team implements the solution with your team",
      icon: Star,
      color: "from-green-500 to-teal-500"
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "Go live with ongoing support and optimization",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "AI & Autonomous Systems",
      description: "Transform your operations with intelligent automation",
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      features: ["AI Legal Research", "Financial Risk Management", "Healthcare Diagnostics", "Supply Chain Optimization"]
    },
    {
      title: "Quantum Technology",
      description: "Leverage next-generation computing power",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
      features: ["Edge Computing", "Neuromorphic Infrastructure", "Holographic Data Centers", "Quantum Internet"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      features: ["Zero Trust Architecture", "Threat Intelligence", "Compliance Automation", "Penetration Testing"]
    },
    {
      title: "IT Infrastructure",
      description: "Modernize your technology foundation",
      icon: Zap,
      color: "from-green-500 to-teal-600",
      features: ["Cloud Migration", "DevOps Automation", "Edge Computing", "Data Center Optimization"]
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Customized solution design",
    "Expert implementation team",
    "Ongoing support & maintenance",
    "Performance monitoring",
    "Regular updates & improvements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Star className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready to transform your business with cutting-edge technology? 
            Our simple 4-step process gets you from idea to implementation quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial consultation to full implementation, we guide you every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to your success with comprehensive support and proven results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Schedule your free consultation and discover how we can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Call Us Now
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Expert technology consultants</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No obligation to purchase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Multiple Ways to Get Started
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our technology experts</p>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message about your needs</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact Form</h3>
              <p className="text-gray-300 mb-4">Fill out our comprehensive contact form</p>
              <Link 
                to="/contact" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                Go to Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;